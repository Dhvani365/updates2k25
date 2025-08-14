"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarClockIcon,
  CameraIcon,
  HomeIcon,
  LogOutIcon,
  UserCog,
  UserIcon,
} from "lucide-react";

import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Dock, DockIcon } from "./magicui/dock";
import { useUser } from "../context/UserContext";
import { signOut } from "next-auth/react";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/events", icon: CalendarClockIcon, label: "Events" },
    { href: "/gallery", icon: CameraIcon, label: "Gallery" },
  ],
};

export function Navbar() {
  const { user, loading } = useUser();

  return (
    <header className="fixed bottom-0 z-30 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="bg-brickDark/80 backdrop-blur-md border-2 border-primary shadow-[0_0_12px_hsl(var(--primary))] relative overflow-hidden"
        >
          {/* Brick overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2230%22 viewBox=%220 0 60 30%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%2260%22 height=%2230%22 fill=%22none%22 stroke=%22hsl(300,100%25,65%25)%22 stroke-width=%222%22/%3E%3C/svg%3E')] pointer-events-none"></div>

          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full hover:bg-primary/20 hover:shadow-[0_0_10px_hsl(var(--primary))] transition-all"
                    )}
                    prefetch={false}
                  >
                    <item.icon className="size-4 text-primary" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full bg-brickOutline" />

          {!loading && user ? (
            <DockIcon key={"Edit user details"}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={"/user-details"}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full hover:bg-secondary/20 hover:shadow-[0_0_10px_hsl(var(--secondary))]"
                    )}
                  >
                    <UserCog className="size-4 text-secondary" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit Details</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ) : null}

          {!loading && user ? (
            <DockIcon key={"logout"}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => signOut()}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full hover:bg-destructive/20 hover:shadow-[0_0_10px_hsl(var(--destructive))]"
                    )}
                  >
                    <LogOutIcon className="size-4 text-destructive" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Logout</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ) : (
            <DockIcon key={"login"}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={"/signin"}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full hover:bg-primary/20 hover:shadow-[0_0_10px_hsl(var(--primary))]"
                    )}
                  >
                    <UserIcon className="size-4 text-primary" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Login</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          )}
        </Dock>
      </TooltipProvider>
    </header>
  );
}
