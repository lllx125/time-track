"use client";
import "./globals.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    //layout 只有一个home键，另外就是设置宽度为390px
    const router = useRouter();
    return (
        <html lang="en">
            <body className="w-[390px] bg-gray-50">
                <Image
                    src="home.svg"
                    alt="home"
                    width={50}
                    height={50}
                    className="px-3 py-6"
                    onClick={() => router.push("/")}
                />
                {children}
            </body>
        </html>
    );
}
