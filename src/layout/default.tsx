import type { ReactNode } from "react";
import LoadingTheme from "../components/loading-theme";
import { useApplyTheme } from "../hook/use-apply-theme";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const { isPending, theme } = useApplyTheme();

  if (isPending || !theme) {
    return <LoadingTheme />;
  }

  return (
    <div className="min-h-screen bg-background   p-8 w-full mx-auto space-y-5">
      {children}
    </div>
  );
}
