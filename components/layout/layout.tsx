"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Dashboard from "@/components/content/Dashboard";
import Contacts from "@/components/content/Contacts";
import Tasks from "@/components/content/Tasks";
import Funnels from "@/components/content/Funnels";
import { Analytics } from "@/components/content/Analytics";
import TeamChat from "@/components/content/TeamChat";
import AppSidebar from "./AppSidebar";
import useSidebarControl from "@/hooks/use-sidebar-control";
import { SidebarInset, SidebarTrigger } from "../ui/sidebar";
export type ActivePage =
  | "dashboard"
  | "contacts"
  | "tasks"
  | "funnels"
  | "analytics"
  | "chat";

export default function CRMLayout() {
  const sidebarControl = useSidebarControl();
  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "contacts":
        return <Contacts />;
      case "tasks":
        return <Tasks />;
      case "funnels":
        return <Funnels />;
      case "analytics":
        return <Analytics />;
      case "chat":
        return <TeamChat />;
      default:
        return <Dashboard />;
    }
  };
  const [activePage, setActivePage] = useState<ActivePage>("dashboard");
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar
        activePage={activePage}
        setActivePage={setActivePage}
        sidebarControl={sidebarControl}
      />
      <div className="flex-1 flex flex-col">
        <SidebarInset>
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-lg font-semibold capitalize">
                  {activePage}
                </h1>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-400 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-400 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">{renderPage()}</main>
        </SidebarInset>
      </div>
    </div>
  );
}
