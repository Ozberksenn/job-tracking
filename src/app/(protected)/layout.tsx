"use client";

import AppAuthProvider from "@/lib/providers/AppAuthProvider";
import { ReactNode } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return <AppAuthProvider>{children}</AppAuthProvider>;
}