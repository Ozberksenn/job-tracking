// "use client";
// import AppSidebar from "@/layout/Sidebar/AppSidebar";
// import Navbar from "@/layout/Navbar/Navbar";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";



// export default  function AppAuthProvider({ children }: { children: React.ReactNode }) {
//     const [token, setToken] = useState<string | null>(null);
//     const router = useRouter();

//     useEffect(() => {
//         const t = localStorage.getItem("token");
//         setToken(t);

//         // token yoksa login'e gönder
//         if (!t) {
//             router.push("/login");
//         }
//     }, []);

//     if (token === null) {
//         return (
//             <SidebarProvider defaultOpen={true}>
//                 {children}
//             </SidebarProvider>
//         )
//     }
//     return (
//         <SidebarProvider defaultOpen={true}>
//             <AppSidebar />
//             <main className="w-full h-screen flex flex-col">
//                 <Navbar />
//                 {children}
//             </main>
//         </SidebarProvider>
//     );
// }

"use client";

import AppSidebar from "@/layout/Sidebar/AppSidebar";
import Navbar from "@/layout/Navbar/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

export default function AppAuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const t = localStorage.getItem("token");
    setToken(t);

    if (!t) {
      router.push("/login");
    }
  }, [router]);

  // token henüz okunmadıysa veya redirect yapılacaksa boş döndür
  if (token === null) {
    return null;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className="w-full h-screen flex flex-col">
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  );
}

