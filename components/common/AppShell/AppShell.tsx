import { cn } from "@/utils/cn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";

interface Proptypes {
  children: ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const queryClient = new QueryClient();

const AppShell = (props: Proptypes) => {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>
      <main className={cn(inter.className)}>{children}</main>
    </QueryClientProvider>
  );
};

export default AppShell;
