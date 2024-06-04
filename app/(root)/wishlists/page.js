import Card from "@/components/shared/Card";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SignedIn>
        <div className="w-full relative wrapper">
          <div className="flex flex-row gap-3 items-center  p-3">
            <Image
              src="/assets/svg/love.svg"
              width={50}
              height={50}
              alt="star"
            />
            <h1 className="h1-semibold text-[#f5f5f5]">Wishlists</h1>
          </div>
          <div className="wrapper grid grid-cols-2 md:grid-cols-3 gap-5 mt-7">
            <Card />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="w-full wrapper">
          <h1 className="h1-semibold text-[#f5f5f5]">Login First</h1>
        </div>
      </SignedOut>
    </>
  );
}
