import CRMLayout from "@/components/layout/layout";
import { CRMProvider } from "@/store/provider";
import { ThemeProvider } from "@/store/themeProvider";
import Image from "next/image";

export default function Home() {
  return (
    <CRMProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <CRMLayout />
      </ThemeProvider>
    </CRMProvider>
  );
}
