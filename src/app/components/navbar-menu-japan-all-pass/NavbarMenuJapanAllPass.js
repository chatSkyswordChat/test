"use client";
import React from "react";
import "flowbite";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./css/navbarMenuJapanAllPass.css";
import MenuJapanAllPass from "./MenuJapanAllPass";

export default function NavbarMenuJapanAllPass() {
  return (
    <nav className="bg-white border-gray-200 border-b border-slate-200">
      <div className="max-w-screen-2xl p-4 flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/assets/images/JAP-Logo.png"
            width={150}
            height={100}
            alt="Logo Japan All Pass"
          />
        </Link>
        <MenuJapanAllPass />

        {/* Open Menu Mobile */}
        <button
          className="lg:hidden block rounded-lg w-11 h-11 flex items-center justify-center hover:text-white hover:bg-primary-100"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* End Open Menu Mobile */}
      </div>
    </nav>
  );
}
