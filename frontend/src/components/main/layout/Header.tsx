import { menuItems, userProfileItems } from "@/lib/fake-data";
import {
    BadgePercent,
    ChevronDown,
    Flag,
    Flame,
    Flashlight,
    List,
    ListTree,
    LogIn,
    Menu,
    Search,
    ShoppingBag,
    ShoppingBasket,
    ShoppingCart,
    User,
    Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="header">
            {/* Top Header Wrapper */}
            <div className="h-24 bg-white border-b border-border">
                {/* Container */}
                <div className="container h-full">
                    <div className="header-wrapper h-full flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            className="font-aquire font-bold text-4xl"
                            href={"/"}
                        >
                            HWT
                        </Link>
                        {/* Search bar */}
                        <form className="hidden lg:block max-w-80 w-full" action="#">
                            <div className="bg-app-bg rounded-4xl flex items-center gap-1 px-4 h-12">
                                {/* input */}
                                <input
                                    placeholder="جستجو کنید ..."
                                    className="flex-1 outline-none text-sm"
                                    type="text"
                                    name=""
                                    id=""
                                />
                                {/* icon - button */}
                                <button
                                    className="cursor-pointer"
                                    type="submit"
                                >
                                    <Search size={20} />
                                </button>
                            </div>
                        </form>
                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                            {/* Search */}
                            <button className="block lg:hidden text-text-secondary" type="button">
                                <Search size={24}/>
                            </button>
                            {/* Shopping Cart */}
                            <Link
                                className="relative text-text-secondary"
                                href={"#"}
                            >
                                <ShoppingBag size={24} />
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
                                <div className="absolute left-0 lg:right-0 top-full w-48 p-4 rounded-2xl bg-white shadow-[0_0_10px_4px_rgba(0,0,0,5%)] flex flex-col gap-4 transition-all duration-200 delay-150 invisible opacity-0 group-hover:visible group-hover:opacity-100">
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
                                className="flex items-center gap-1 font-vazir-medium bg-app-bg px-4 lg:px-6 h-12 rounded-xl transition-all duration-200 hover:bg-btn-secondary"
                                href={"#"}
                            >
                                <LogIn size={24} />
                                <span className="hidden lg:inline">ورود/ثبت نام</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Items */}
            <div className="bg-slate-50 shadow py-4">
                <div className="container">
                    {/* Desktop */}
                    <ul className="relative hidden xl:flex items-center gap-4 font-vazir-medium">
                        {menuItems.map((item) => (
                            <div key={item.id} className="group">
                                {/* Category Item */}
                                <li>
                                    <Link
                                        className="flex items-center gap-1 transition-all duration-200 hover:text-text-secondary"
                                        href={"#"}
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown size={14} />
                                    </Link>
                                </li>
                                {/* Submenu */}
                                <div className="absolute left-0 right-0 top-full bg-white shadow p-4 rounded-b-xl transition-all duration-200 delay-150 invisible opacity-0 group-hover:visible group-hover:opacity-100 grid grid-cols-5 gap-y-8">
                                    {item.items?.map((item) => (
                                        <div key={item.id} className="text-sm">
                                            {/* title */}
                                            <h6 className="mb-4">
                                                <Link
                                                    className="transition-all duration-200 hover:text-text-secondary"
                                                    href={"#"}
                                                >
                                                    {item.title}
                                                </Link>
                                            </h6>
                                            <ul className="flex flex-col gap-3 text-text-secondary">
                                                {item.items &&
                                                    item.items.map((item) => (
                                                        <li key={item.id}>
                                                            <Link
                                                                className="transition-all duration-200 hover:text-text-primary"
                                                                href={"#"}
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </ul>
                    {/* Mobile */}
                    <ul className="flex items-center gap-4 xl:hidden font-vazir-medium text-sm">
                        <li className="">
                            <Link
                                className="flex items-center gap-1"
                                href={"#"}
                            >
                                <Menu size={20} />
                                <span>دسته بندی ها</span>
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <Link
                                className="flex items-center gap-1"
                                href={"#"}
                            >
                                <Flame size={20} />
                                <span>پرفروشترین ها</span>
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <Link
                                className="flex items-center gap-1"
                                href={"#"}
                            >
                                <Zap size={20} />
                                <span>محبوب ترین ها</span>
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <Link
                                className="flex items-center gap-1"
                                href={"#"}
                            >
                                <BadgePercent size={20} />
                                <span>تخفیفات ویژه</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
