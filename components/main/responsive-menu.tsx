import React, { useState } from "react";
import { FaCaretDown, FaCaretUp, FaUserCircle } from "react-icons/fa";
import { Link, usePathname } from "@/i18n/navigation";
import {
  Database,
  Wrench,
  Globe,
  Smartphone,
  CreditCard,
  BookCheck,
  Boxes,
  Building2,
  BarChart,
  Building,
  ShoppingCart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ResponsiveMenuProps {
  showMenu: boolean;
}

const ResponsiveMenu = React.forwardRef<HTMLDivElement, ResponsiveMenuProps>(
  ({ showMenu }: { showMenu: boolean }, ref) => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const url = usePathname();

    return (
      <div
        ref={ref}
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed top-0 z-[999] flex h-full w-[75%] flex-col justify-between border-r bg-slate-100 transition-all duration-200 dark:bg-slate-950 dark:text-white 2xl:hidden`}
      >
        <div className="flex-grow overflow-y-auto overflow-x-hidden p-5">
          <div className="card">
            <div className="flex items-center justify-start gap-3">
              <FaUserCircle size={50} />
              <div>
                <h1>Talat Md. Tawfiq Elahi</h1>
                <h1 className="text-sm text-slate-500">CEO</h1>
              </div>
            </div>
            <nav className="mt-5">
              <ul className="space-y-4 text-xl">
                <li className="p-2 hover:bg-violet-200">
                  <Link
                    href="/"
                    className={cn(
                      "/" == url
                        ? "flex items-center gap-2 text-red-500"
                        : "flex items-center gap-2"
                    )}
                  >
                    Home
                  </Link>
                </li>
                <li className="p-2 hover:bg-violet-200">
                  <Link
                    href="/about"
                    className={cn(
                      "/about" == url
                        ? "flex items-center gap-2 text-red-500"
                        : "flex items-center gap-2"
                    )}
                  >
                    About Us
                  </Link>
                </li>
                <li className="p-2 hover:bg-violet-200">
                  <Link
                    href="/team"
                    className={cn(
                      "/team" == url
                        ? "flex items-center gap-2 text-red-500"
                        : "flex items-center gap-2"
                    )}
                  >
                    Meet Our Executive Team
                  </Link>
                </li>
                {/* Services Dropdown */}
                <li className="group relative cursor-pointer p-2 hover:bg-violet-200 ">
                  <div
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center gap-2"
                  >
                    Services{" "}
                    {isServicesOpen ? (
                      <FaCaretUp className="transform transition-transform duration-200" />
                    ) : (
                      <FaCaretDown className="transform transition-transform duration-200" />
                    )}
                  </div>
                  <div
                    className={`absolute left-0 z-10 w-full max-w-md rounded-lg bg-slate-200 text-gray-800 shadow-lg transition-all duration-200 dark:bg-slate-800 ${
                      isServicesOpen
                        ? "max-h-96 overflow-auto"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <div className="flex flex-col gap-4 p-4 md:flex-row">
                      <div className="w-full overflow-hidden relative md:w-36">
                        <Image
                          className="w-full rounded-lg"
                          src="https://picsum.photos/200"
                          alt="Service"
                          fill
                        />
                      </div>
                      <div>
                        <div className="mb-4">
                          <h1 className="text-lg font-semibold">
                            Best Selling
                          </h1>
                          <p className="text-sm text-gray-600 dark:text-white ">
                            Explore our top-rated services tailored to meet your
                            needs.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 dark:text-white md:grid-cols-2 ">
                          <div>
                            <h2 className="text-md mb-2 font-semibold text-green-300">
                              Development
                            </h2>
                            <ul className="flex flex-col gap-1">
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/OurService"
                                  className={cn(
                                    "/OurService" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Database className="h-4 w-4" />
                                  Big Data Analysis & Dashboard Design
                                </Link>
                              </li>
                              <li className="mb-3 cursor-pointer ring-green-300 hover:text-primary">
                                <Link
                                  href="/services"
                                  className={cn(
                                    "/services" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Wrench className="h-4 w-4" />
                                  Regular Services
                                </Link>
                              </li>
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/Web"
                                  className={cn(
                                    "/Web" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Globe className="h-4 w-4" />
                                  Web Development
                                </Link>
                              </li>
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/IOS"
                                  className={cn(
                                    "/IOS" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Smartphone className="h-4 w-4" />
                                  iOS App Development
                                </Link>
                              </li>
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/Mobile"
                                  className={cn(
                                    "/Mobile" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Smartphone className="h-4 w-4" />
                                  Mobile App Development
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h2 className="text-md mb-3 font-semibold text-green-300">
                              Other Services
                            </h2>
                            <ul className="flex flex-col gap-1">
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/payment-gateway"
                                  className={cn(
                                    "/payment-gateway" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <CreditCard className="h-4 w-4" />
                                  Payment Gateway Integration
                                </Link>
                              </li>
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/quickbook-integration"
                                  className={cn(
                                    "/quickbook-integration" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <BookCheck className="h-4 w-4" />
                                  QuickBooks Integration
                                </Link>
                              </li>
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/zoho-integration"
                                  className={cn(
                                    "/zoho-integration" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Boxes className="h-4 w-4" />
                                  Zoho Integration
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Technologies Dropdown */}
                <li className="group relative cursor-pointer p-2 hover:bg-violet-200">
                  <div
                    onClick={() => setIsTechnologiesOpen(!isTechnologiesOpen)}
                    className="flex items-center gap-2"
                  >
                    Technologies{" "}
                    {isTechnologiesOpen ? (
                      <FaCaretUp className="transform transition-transform duration-200" />
                    ) : (
                      <FaCaretDown className="transform transition-transform duration-200" />
                    )}
                  </div>
                  <div
                    className={`absolute left-0 z-10 w-full max-w-md rounded-lg bg-slate-200 shadow-lg transition-all duration-200 dark:bg-slate-800 dark:text-white ${
                      isTechnologiesOpen
                        ? "max-h-96 overflow-auto"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <div className="flex flex-col gap-4 p-4 md:flex-row">
                      <div className="w-full relative overflow-hidden md:w-36">
                        <Image
                          className="w-full rounded-lg"
                          src="https://picsum.photos/200"
                          alt="Technology"
                          fill
                        />
                      </div>
                      <div>
                        <div className="mb-4">
                          <h1 className="text-lg font-semibold">
                            Our Technologies
                          </h1>
                          <p className="text-sm ">
                            Explore our top-rated services tailored to meet your
                            needs.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div>
                            <h2 className="text-md mb-2 font-semibold text-green-300">
                              Technologies
                            </h2>
                            <ul className="flex flex-col gap-1">
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/technologies/frontend"
                                  className={cn(
                                    "/technologies/frontend" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Globe className="h-4 w-4" />
                                  Frontend Technology
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h2 className="text-md mb-2 font-semibold text-green-300">
                              Other
                            </h2>
                            <ul className="flex flex-col gap-1">
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/technologies/backend"
                                  className={cn(
                                    "/technologies/backend" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Database className="h-4 w-4" />
                                  Backend Technology
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Products Dropdown */}
                <li className="group relative cursor-pointer p-2 hover:bg-violet-200">
                  <div
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center gap-2"
                  >
                    Products{" "}
                    {isProductsOpen ? (
                      <FaCaretUp className="transform transition-transform duration-200" />
                    ) : (
                      <FaCaretDown className="transform transition-transform duration-200" />
                    )}
                  </div>
                  <div
                    className={`absolute left-0 z-10 w-full max-w-md rounded-lg  bg-slate-200 shadow-lg transition-all duration-200 dark:bg-slate-800 dark:text-white ${
                      isProductsOpen
                        ? "max-h-96 overflow-auto"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <div className="flex flex-col gap-4 p-4 md:flex-row">
                      <div className="w-full overflow-hidden relative md:w-36">
                        <Image
                          className="w-full rounded-lg"
                          src="https://picsum.photos/200"
                          alt="Product"
                          fill
                        />
                      </div>
                      <div>
                        <div className="mb-4">
                          <h1 className="text-lg font-semibold">
                            Our Products
                          </h1>
                          <p className="text-sm ">
                            Explore our top-rated services tailored to meet your
                            needs.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div>
                            <h2 className="text-md mb-2 font-semibold text-green-300">
                              Products
                            </h2>
                            <ul className="flex flex-col gap-1">
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/products/govt"
                                  className={cn(
                                    "/products/govt" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Building2 className="h-4 w-4" />
                                  Govt
                                </Link>
                              </li>
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/products/seo"
                                  className={cn(
                                    "/products/seo" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <BarChart className="h-4 w-4" />
                                  SEO Agencies
                                </Link>
                              </li>
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/products/financial"
                                  className={cn(
                                    "/products/financial" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Building className="h-4 w-4" />
                                  Financial
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h2 className="text-md mb-2 font-semibold text-green-300">
                              Other Products
                            </h2>
                            <ul className="flex flex-col gap-1">
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/products/corporate"
                                  className={cn(
                                    "/products/corporate" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <Building2 className="h-4 w-4" />
                                  Corporate
                                </Link>
                              </li>
                              <li className="mb-3 cursor-pointer hover:text-primary">
                                <Link
                                  href="/products/ecommerce"
                                  className={cn(
                                    "/products/ecommerce" == url
                                      ? "flex items-center gap-2 text-red-500"
                                      : "flex items-center gap-2"
                                  )}
                                >
                                  <ShoppingCart className="h-4 w-4" />
                                  Ecommerce
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="p-2 hover:bg-violet-200">
                  <Link
                    href="/hardware"
                    className={cn(
                      "/hardware" == url
                        ? "flex items-center gap-2 text-red-500"
                        : "flex items-center gap-2"
                    )}
                  >
                    Hardware Products
                  </Link>
                </li>

                <li className="p-2 hover:bg-violet-200">
                  <Link
                    href="/drones"
                    className={cn(
                      "/drones" == url
                        ? "flex items-center gap-2 text-red-500"
                        : "flex items-center gap-2"
                    )}
                  >
                    Drones
                  </Link>
                </li>

                <li className="p-2 hover:bg-violet-200">
                  <Link
                    href="/contact"
                    className={cn(
                      "/contact" == url
                        ? "flex items-center gap-2 text-red-500"
                        : "flex items-center gap-2"
                    )}
                  >
                    Contact
                  </Link>
                </li>

                <li className="p-2 hover:bg-violet-200">
                  <Link
                    href="/blogs"
                    className={cn(
                      "/blogs" == url
                        ? "flex items-center gap-2 text-red-500"
                        : "flex items-center gap-2"
                    )}
                  >
                    Blogs
                  </Link>
                </li>

                <li className="p-2 hover:bg-violet-200">
                  <Link
                    href="/privacy"
                    className={cn(
                      "/privacy" == url
                        ? "flex items-center gap-2 text-red-500"
                        : "flex items-center gap-2"
                    )}
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li className="p-2 hover:bg-violet-200">
                  <Link
                    href="/add-book"
                    className={cn(
                      "/add-book" == url
                        ? "flex items-center gap-2 text-red-500"
                        : "flex items-center gap-2"
                    )}
                  >
                    Add your Comments
                  </Link>
                </li>

                <li className="relative cursor-pointer">
                  <Link href="/career" className="boxshadow link">
                    Career
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer bg-slate-100 p-5 dark:bg-gray-900">
          <h1>{new Date().getFullYear()} All Rights Reserved</h1>
        </div>
      </div>
    );
  }
);

ResponsiveMenu.displayName = "ResponsiveMenu";
export default ResponsiveMenu;
