import type { Metadata } from "next"; // Sets up metadata for the page (like title and description).
import { Inter } from "next/font/google"; // Adds the Inter font from Google Fonts.
import "../globals.css"; // Loads global styles for the app.

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs' // Adds tools for login, user buttons, and other authentication features.

const inter = Inter({ subsets: ["latin"] }); // Prepares the Inter font with Latin characters.

export const metadata: Metadata = {
  title: "AR Webstore Auth",   // The title of the page.
  description: "AR Webstore",  // A short description of the page.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (             // Defines the root layout of the app, taking children components as input.
    <ClerkProvider>    {/* Wraps the app with ClerkProvider to enable authentication features */}
    <html lang="en">   {/* Sets the language of the page to English */}
      <body className={inter.className}>{children}</body>  {/* Applies the Inter font to the page */}
    </html> 
    </ClerkProvider>
  );
}
