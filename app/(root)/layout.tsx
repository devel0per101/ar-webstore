import type { Metadata } from "next"; // Adds metadata for the page (like title and description).
import { Inter } from "next/font/google";  // Loads the Inter font from Google Fonts.
import { ClerkProvider } from "@clerk/nextjs"; // Adds tools for user authentication.

import "../globals.css"; // Includes global styles for the app.
import Navbar from "@/components/Navbar"; // Brings in the Navigation bar component to show at the top.

const inter = Inter({ subsets: ["latin"] }); // Sets up the Inter font for the app.

export const metadata: Metadata = { 
  title: "AR Webstore",  // The title of the web page.
  description: "AR Webstore",  // A short description of the web page.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;   // This is the main layout of the app, taking child components.
}>) {
  return (
    <html lang="en">       {/* Defines the language of the page as English */}
      <body className={inter.className}>   {/* Applies the Inter font to the page */}
        <ClerkProvider>    {/* Enables login and authentication features */}
          <Navbar />       {/* Shows the Navbar at the top */}
          {children}       {/* Renders the content from child components */}
        </ClerkProvider>
      </body>
    </html>
  );
}
