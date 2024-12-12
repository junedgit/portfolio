import React from "react";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Layout = ({
  children,
}: React.PropsWithChildren<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {children}
      </div>
    </main>
  );
};

export default Layout;
