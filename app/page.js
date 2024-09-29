"use client";

import { useRouter } from "next/navigation";
import NavBar from "../comps/Nav";
import { Button } from "@nextui-org/react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen px-10 py-5 relative">
      <NavBar />
      <section className="flex-grow flex flex-col justify-center  relative">
        <div className="flex gap-3 items-center">
          <h1 className="text-7xl text-gray-900">Less waste. <span className="font-bold">More giving.</span></h1>
        </div>
        <p className="text-xl mt-10 opacity-90 max-w-[38%] leading-loose">We help connect local businesses with local charities, providing a direct pipeline for surplus food exchange.</p>

        <Button
          className="text-white mt-24 w-[20%] bg-black"
          size="lg"
          radius="full"
          color="black"
          endContent={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="MediumSeaGreen" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>}
          onClick={() => {
            router.push("/register")
          }}
        >
          Consult with us
        </Button>

        <img src="illustration.svg" className="absolute bottom-[-20px] right-0 max-h-[75%]" />
      </section>
    </div>

  );
}
