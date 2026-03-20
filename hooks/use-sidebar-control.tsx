"use client";
import { useCallback, useState } from "react";
export default function useSidebarControl() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
  return { isOpen, toggle, open, close, setIsOpen };
}
