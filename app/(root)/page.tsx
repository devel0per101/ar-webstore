import Collections from "@/components/Collections";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src ="/banner.jpeg" alt = "banner" width={2000} height={2000} className="w-screen" />
      <Collections />
    </>
  );
}
    