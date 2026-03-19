"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export type ActivePage =
  | "dashboard"
  | "contacts"
  | "tasks"
  | "funnels"
  | "analytics"
  | "chat";

export default function CRMLayout() {
  const [activePage, setActivePage] = useState<ActivePage>("dashboard");
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex min-h-screen w-full bg-background">
      <div>sidebar</div>
      <div className="flex-1 flex flex-col">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              sidebar trigger
              <h1 className="text-lg font-semibold capitalize">{activePage}</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">{activePage}</main>
        sidebarinset
      </div>
    </div>
  );
}
