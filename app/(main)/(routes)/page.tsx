import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="text-3xl font-bold text-indigo-500 flex justify-between items-center">
      Discord
      <div className="flex items-center justify-between gap-2">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
