import Collections from "@/components/Collections";  // Gets the Collections part of the app.
import Image from "next/image";  // Brings in a special image component to show images nicely.

export default function Home() {  // Makes the Home page.
  return (
    <>
      <Image src ="/banner.jpeg" alt = "banner" width={2000} height={2000} className="w-screen" />  {/* Displays a full-width banner image */}
      <Collections />   {/* Shows the Collections component */}
    </>
  );
}
    