import { MobileNav } from "@/components/MobileNav";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = { firstName: "Janco", lastName: "De Beer" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={user} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          <div>
            <MobileNav user={user} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
