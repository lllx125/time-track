import "./globals.css";

import HomeButton from "./HomeButton";

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
