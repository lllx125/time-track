import "./globals.css";

import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import HomeButton from "@/HomeButton";

const client = generateClient<Schema>();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    //layout only has a home button, and set width to 390 (width of iphone)

    //store data in layout so that it does need to fetch again
    return (
        <html lang="en">
            <body className="w-[390px] bg-gray-50">
                <HomeButton />
                {children}
            </body>
        </html>
    );
}
