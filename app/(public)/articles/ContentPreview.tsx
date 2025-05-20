'use client'

import MDEditor from "@uiw/react-md-editor"

export default function ContentPreview({ content, className }: { content?: string, className?: string }) {
  return (
    <div className={`${className}`}>
      <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  )
}