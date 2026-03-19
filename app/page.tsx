import CRMLayout from "@/components/layout/layout";
import { CRMProvider } from "@/store/provider";
import Image from "next/image";

export default function Home() {
  return (
    <CRMProvider>
      <CRMLayout />
    </CRMProvider>
  );
}
