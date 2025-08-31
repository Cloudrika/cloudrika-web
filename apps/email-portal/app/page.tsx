"use client"
import { Button } from "@workspace/ui/components";
import { useTheme } from "next-themes";

export default function Page() {
  const { setTheme } = useTheme()
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4 bg-primary-inverse">
        <h1 className="text-2xl font-bold bg-primary-inverse"
          style={{ backgroundColor: 'var(--primary-inverse)' }}
        >Hello World</h1>
        <Button
          shape="rect"
          variant="primary"
          size="md"
          onClick={() => {
            setTheme((prev) => prev === "light" ? "dark" : "light")
          }}
        >
          Click Me
        </Button>
        <div className="text-shadow-content-primary text-content-secondary text-shadow-2xs">Basic Tailwind</div>
        <div className="text-primary-inverse  "

        >Your custom primary</div>
      </div>
      {/* <EditorContent editor={editor} className="w-[80%] bg-gray-300" /> */}
    </div>
  )
}
