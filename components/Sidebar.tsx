<<<<<<< HEAD
"use client"
=======
"use client";
>>>>>>> 6090baa (cont-commit)
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
<<<<<<< HEAD
    const pathname = usePathname();
=======
  const pathname = usePathname();
>>>>>>> 6090baa (cont-commit)
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px]
                      max-xl:size-14"
          />
          <h1 className="sidebar-logo">Aneirizon</h1>
<<<<<<< HEAD
              </Link>
              {sidebarLinks.map((item) =>
              {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                  return (
                    <Link href={item.route} key={item.label}
                    className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
                  >
                    <div className="relative size-6">
                      <Image 
                        src={item.imgURL}
                        alt={item.label}
                        fill
                        className={cn({
                          'brightness-[3] invert-0': isActive
                        })}
                      />
                    </div>
                    <p className={cn("sidebar-label", { "!text-white": isActive })}>
                      {item.label}
                    </p>
                  </Link>
                )
              })}
                
=======
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })} USER
>>>>>>> 6090baa (cont-commit)
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
