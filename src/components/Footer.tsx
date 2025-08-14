import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-brickOutline w-full bg-brickDark/80 backdrop-blur-md shadow-[0_0_12px_hsl(var(--brick-outline))] relative overflow-hidden">
      {/* Brick overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2230%22 viewBox=%220 0 60 30%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%2260%22 height=%2230%22 fill=%22none%22 stroke=%22hsl(180,100%25,65%25)%22 stroke-width=%222%22/%3E%3C/svg%3E')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 pt-20 px-3 pb-36 text-sm md:text-base relative z-10">
        {/* Faculty & Students */}
        <div className="flex flex-col col-span-1 gap-1 mx-auto">
          <h1 className="mb-2 font-bold text-primary drop-shadow-[0_0_6px_hsl(var(--primary))]">
            Faculty Coordinators
          </h1>
          <div className="flex flex-col gap-1 text-secondary">
            <p>Pranav Rathod</p>
            <p>Alankrita Vishwakarma</p>
            <p>Saifali Modi</p>
          </div>
          <h1 className="mt-6 mb-2 font-bold text-primary drop-shadow-[0_0_6px_hsl(var(--primary))]">
            Student Coordinators
          </h1>
          <div className="flex flex-col gap-1 text-secondary">
            <p>Zenil Dhameliya</p>
            <p>Kaushal Gadhiya</p>
            <p>Aum M Patel</p>
            <p>Archi Gazdar</p>
            <p>Mitesh Dobariya</p>
          </div>
        </div>

        {/* Developers & Social */}
        <div className="col-span-1 mx-auto">
          <h1 className="mb-2 font-bold text-primary drop-shadow-[0_0_6px_hsl(var(--primary))]">
            Web Developers
          </h1>
          <div className="flex flex-col gap-1 text-secondary">
            <p>
              <a
                href="https://github.com/dhruvinvaghani001"
                target="_blank"
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                Dhruvin Vaghani
              </a>
            </p>
            <p>
              <a
                href="https://github.com/nikhar-savaliya"
                target="_blank"
                className="underline underline-offset-4 hover:text-primary"
              >
                Nikhar Savaliya
              </a>
            </p>
            <p>
              <a
                href="https://github.com/abhiradadiya07"
                target="_blank"
                className="underline underline-offset-4 hover:text-primary"
              >
                Abhishek Radadiya
              </a>
            </p>
            <p>Dhvani Maktuporia</p>
            <p>Kuldeep Kevat</p>
          </div>

          <Link
            href={"https://instagram.com/updates2k24"}
            className="flex items-center justify-start mt-8 gap-2 text-secondary hover:text-primary transition-colors"
          >
            <Instagram />
            <p className="underline">Follow us</p>
          </Link>
        </div>

        {/* Footer Note */}
        <p className="col-span-2 mt-8 text-center text-secondary/70">
          © Updates 2k25 - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
