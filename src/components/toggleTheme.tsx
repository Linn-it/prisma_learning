"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };

  return (
        <Button onClick={toggleMode} variant="ghost" size="icon" className="cursor-pointer text-primary hover:text-primary/60">
          <Sun size={20} className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon size={20} className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}
