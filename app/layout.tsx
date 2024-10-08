import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth"
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat GPT",
  description: "Chat GPT Messenger",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {
            !session ? (
              <Login />
            ) : (
              <div className="flex">
                <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                  <SideBar />
                </div>
                <div className="bg-[#343541] flex-1">{children}</div>
              </div>
            )
          }
        </SessionProvider>
      </body>
    </html>
  );
}
