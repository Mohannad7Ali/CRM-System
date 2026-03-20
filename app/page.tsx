"use client";
import CRMLayout from "@/components/layout/layout";
import { CRMProvider } from "@/store/provider";
import { ThemeProvider } from "@/store/themeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import useSidebarControl from "@/hooks/use-sidebar-control";
import { TooltipProvider } from "@/components/ui/tooltip";
export default function Home() {
  const sidebarControl = useSidebarControl();
  return (
    <CRMProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider delayDuration={0}>
          <SidebarProvider
            open={sidebarControl.isOpen}
            onOpenChange={sidebarControl.setIsOpen}
            defaultOpen={true}
          >
            <CRMLayout />
          </SidebarProvider>
        </TooltipProvider>
      </ThemeProvider>
    </CRMProvider>
  );
}
