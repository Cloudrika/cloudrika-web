"use client"
import { EditorContent, useEditor } from "@tiptap/react";
import { Button } from "@workspace/ui/components/button";
import StarterKit from '@tiptap/starter-kit'
export default function Page() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',

    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button
          shape="rect"
          size="default"
          variant="link"
        >
          Click Me
        </Button>
      </div>
      <EditorContent editor={editor} className="w-[80%] bg-gray-300" />
    </div>
  )
}
