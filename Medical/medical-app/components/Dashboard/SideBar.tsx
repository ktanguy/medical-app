'use client';

import { BarChart, Folder, Grid2X2, Home, Plus, Settings, ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import LogoutButton from "./LogoutButton";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden xl:flex xl:w-64 xl:flex-col border-r border-gray-300">
      <div className="flex flex-col pt-5 overflow-y-auto">
        <div className="flex flex-col justify-between flex-1 h-full px-4">
          <div className="space-y-4">
            <div>
              <Button
                variant="outline"
                className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500 hover:text-slate-50"
              >
                <Plus className="w-5 h-5 mr-1" />
                Create Product
              </Button>
            </div>
            <div>
              <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Analytics
              </p>
              <nav className="flex-1 mt-4 space-y-1">
                <Link
                  href="/dashboard"
                  className={`flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group ${
                    pathname === "/dashboard"
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <Home className="flex-shrink-0 w-5 h-5 mr-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/categories"
                  title="categories"
                  className={`flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group ${
                    pathname === "/dashboard/categories"
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <Grid2X2 className="flex-shrink-0 w-5 h-5 mr-4" />
                  Categories
                </Link>
                <Link
                  href="/dashboard/products"
                  className={`flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group ${
                    pathname === "/dashboard/products"
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <Folder className="flex-shrink-0 w-5 h-5 mr-4" />
                  Products
                </Link>
              </nav>
            </div>
          </div>

          <div className="pb-4 mt-12">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group w-full">
                    <Settings className="flex-shrink-0 w-5 h-5 mr-4" />
                    <span>Settings</span>
                    <ChevronDown
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 ml-auto`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <Link
                      href="/settings/profile"
                      className={`block px-4 py-2 rounded-lg ${
                        pathname === "/settings/profile"
                          ? "bg-gray-200 text-gray-900"
                          : "text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings/account"
                      className={`block px-4 py-2 rounded-lg ${
                        pathname === "/settings/account"
                          ? "bg-gray-200 text-gray-900"
                          : "text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      Account
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}