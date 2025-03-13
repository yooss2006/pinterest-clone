import { Header } from "@/components/layout/header";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const isLogin = false;

  if (isLogin) return null;

  return (
    <div className="h-full flex">
      <Header />
      {children}
    </div>
  );
}
