import { userProfileItems } from "@/lib/fake-data";
import { LogIn, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="header h-24 bg-white shadow-[0_0_10px_0_rgba(0,0,0,4%)]">
            {/* Container */}
            <div className="container h-full">
                {/* Top Header Wrapper */}
                <div className="header-wrapper h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link className="font-aquire font-bold text-4xl" href={"/"}>
                        HWT
                    </Link>
                    {/* Search bar */}
                    <form className="max-w-80 w-full" action="#">
                        <div className="bg-app-bg rounded-4xl flex items-center gap-2 px-4 h-12">
                            {/* input */}
                            <input
                                placeholder="جستجو کنید ..."
                                className="flex-1 outline-none text-sm"
                                type="text"
                                name=""
                                id=""
                            />
                            {/* icon - button */}
                            <button className="cursor-pointer" type="submit">
                                <Search size={20} />
                            </button>
                        </div>
                    </form>
                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        {/* Shopping Cart */}
                        <Link className="relative" href={"#"}>
                            <ShoppingCart size={24} />
                            <span className="absolute bg-red-500 text-white w-5 h-5 text-sm rounded-full -top-2 -left-2 font-vazir-medium flex items-center justify-center">
                                4
                            </span>
                        </Link>
                        {/* User Profile */}

                        <div className="relative group">
                            {/* button */}
                            <button
                                className="text-text-secondary flex items-center justify-center transition-all duration-200 cursor-pointer"
                                type="button"
                            >
                                <User size={24} />
                            </button>
                            {/* content */}
                            <div className="absolute right-0 top-full w-48 p-4 rounded-2xl bg-white shadow-[0_0_10px_4px_rgba(0,0,0,5%)] flex flex-col gap-4 transition-all duration-200 delay-150 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                                {userProfileItems.map((item) => (
                                    <Link
                                        className="flex items-center gap-2 text-text-secondary font-vazir-medium transition-all duration-200 hover:text-text-primary"
                                        key={item.id}
                                        href={item.href}
                                    >
                                        <span>
                                            {/* {userProfileIconsMap[item.title]} */}
                                        </span>
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Login / Register */}
                        <Link
                            className="flex items-center gap-1 font-vazir-medium bg-app-bg px-6 h-12 rounded-xl transition-all duration-200 hover:bg-btn-secondary"
                            href={"#"}
                        >
                            <LogIn size={24} />
                            <span>ورود/ثبت نام</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
