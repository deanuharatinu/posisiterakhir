import { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  readOnly?: boolean;
  onChange?: (data: OutputData) => void;
};

export default function EditorWrapper({ data, readOnly, onChange }: Readonly<Props>) {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current && data) {
      const editor = new EditorJS({
        holder: "editorjs",
        data,
        readOnly: readOnly,
        tools: {
          header: Header,
          paragraph: Paragraph,
          quote: Quote,
          table: Table,
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
  });

  return <div id="editorjs" />;
}
