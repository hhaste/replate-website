'use client';

import { Button } from "@nextui-org/react";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter();
    const cookie = getCookie("company");
    return (
        <nav className="flex items-center justify-between">
            <div className="cursor-pointer" onClick={() => router.push("/")}>
                <img src="logo.svg" className="h-10" />
            </div>
            <div className="flex gap-4">
                <Link className="text-large px-5 opacity-50" href="/mission">Mission</Link>
                <Link className="text-large px-5 opacity-50" href="/mission">Team</Link>
                <Link className="text-large px-5 opacity-50" href="/contact">Contact</Link>
            </div>
            {cookie
                ? <Button
                    href="/dashboard"
                    className="text-white"
                    as={Link}
                    size="lg"
                    radius="full"
                    color="success"
                    showAnchorIcon
                >
                    {JSON.parse(cookie).name}
                </Button>
                : <Button
                    href="/dashboard"
                    className="text-white"
                    as={Link}
                    size="lg"
                    radius="full"
                    color="success"
                    showAnchorIcon
                >
                    Get started
                </Button>}
        </nav>
    );
}
