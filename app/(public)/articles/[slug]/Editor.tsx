import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

type Props = {
  data?: any;
  onChange?: (data: any) => void;
};

export default function EditorWrapper({ data, onChange }: Props) {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current && data) {
      const editor = new EditorJS({
        holder: "editorjs",
        data,
        readOnly: true,
        tools: {
          header: require("@editorjs/header"),
          paragraph: require("@editorjs/paragraph"),
          quote: require("@editorjs/quote"),
          table: require("@editorjs/table"),
        },
        onChange: async () => {
          const outputData = await editor.save();
          onChange?.(outputData);
        },
      });

      editorRef.current = editor;
    }

    const handleBeforeUnload = () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [data]);

  return <div id="editorjs" />;
}
