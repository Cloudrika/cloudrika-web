"use client"

import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { useTheme } from "next-themes";

export default function Page() {
  const { setTheme, theme } = useTheme()
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold bg-primary-inverse"
          style={{ backgroundColor: 'var(--primary-inverse)' }}
        >Hello World</h1>
        <Button
          shape="rect"
          size="xs"
          variant="primary"
          className={cn("w-52"
          )}
          onClick={() => {
            setTheme((prev) => prev === "light" ? "dark" : "light")
          }}
          asChild
        >

          <div>   Click Me
          </div>
        </Button>
        <div className="text-shadow-content-primary text-content-secondary text-shadow-2xs">Basic Tailwind</div>
        <div className="text-primary-inverse"
          style={{ backgroundColor: 'var(--info)' }}
        >Your custom primary</div>
      </div>
      {/* <EditorContent editor={editor} className="w-[80%] bg-gray-300" /> */}
    </div>
  )
}
