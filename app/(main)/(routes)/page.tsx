import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-3xl font-bold text-indigo-500 flex justify-between items-center">
      Discord <UserButton afterSignOutUrl="/" />
    </div>
  );
}
