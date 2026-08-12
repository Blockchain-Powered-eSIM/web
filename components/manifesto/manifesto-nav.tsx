import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";

import Logo from "@/assets/logo.svg";
import { Links } from "@/components/global/nav-bar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";

/**
 * Nav row for /manifesto. Unlike the global NavBar, this has no background
 * of its own — it sits directly on the shared translucent panel
 * (manifesto-shell.tsx) alongside the page content, per the reference mockup.
 */
export function ManifestoNav() {
  return (
    <nav className="flex w-full items-center justify-between">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          height={24}
          className="h-6 w-auto md:h-8 lg:h-12"
          style={{ width: "auto" }}
        />
      </Link>

      {/* Mobile Nav */}
      <Dialog>
        <DialogTrigger className="md:hidden">
          <Menu />
        </DialogTrigger>
        <DialogContent className="top-[22%] w-11/12 rounded-4xl bg-ship-cove-50">
          <DialogHeader className="flex">
            <DialogTitle className="-mt-2 flex justify-start">
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
              />
            </DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <div className="flex flex-col gap-6">
            <Links />
          </div>
        </DialogContent>
      </Dialog>

      {/* Desktop Nav */}
      <div className="hidden items-center gap-8 md:flex">
        <Links />
      </div>
    </nav>
  );
}
