import { userProfileItems } from "@/lib/fake-data";
import {
    Bell,
    Power,
    Search,
    SearchIcon,
    Settings,
    User,
    UserCog,
} from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";

export default function AdminPanelHeader() {
    const userProfileIconsMap: Record<string, JSX.Element> = {
        "تنظیمات حساب": <Settings size={20} />,
        پروفایل: <User size={20} />,
    };
    return (
        <div className="w-full h-20 bg-white shadow-[0_0_10px_4px_rgba(0,0,0,5%)] rounded-2xl mb-4 flex items-center justify-between px-4">
            {/* search bar */}
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
            {/* icons */}
            <div className="flex items-center gap-2">
                {/* Notifications */}
                <Link
                    href={"/admin-panel/notifications"}
                    className="relative text-text-secondary flex items-center justify-center w-10 h-10 rounded-full border border-border transition-all duration-200 hover:bg-app-bg hover:text-text-primary hover:border-app-bg cursor-pointer"
                    type="button"
                >
                    <Bell size={24} />
                    <span className="absolute bg-red-500 text-white w-5 h-5 text-sm rounded-full -top-2 -left-2 font-vazir-medium flex items-center justify-center">
                        4
                    </span>
                </Link>
                {/* user profile */}
                <div className="relative group">
                    {/* button */}
                    <button
                        className="text-text-secondary flex items-center justify-center w-10 h-10 rounded-full border border-border transition-all duration-200 hover:bg-app-bg hover:text-text-primary hover:border-app-bg cursor-pointer"
                        type="button"
                    >
                        <User size={24} />
                    </button>
                    {/* content */}
                    <div className="absolute left-0 top-full w-56 p-4 rounded-2xl bg-white shadow-[0_0_10px_4px_rgba(0,0,0,5%)] flex flex-col gap-4 transition-all duration-200 delay-150 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                        {userProfileItems.map((item) => (
                            <Link
                                className="flex items-center gap-2 text-text-secondary font-vazir-medium transition-all duration-200 hover:text-text-primary"
                                key={item.id}
                                href={item.href}
                            >
                                <span>{userProfileIconsMap[item.title]}</span>
                                <span>{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Logout */}
                <Link
                    className="text-red-400 flex items-center justify-center w-10 h-10 rounded-full border border-red-200 transition-all duration-200 hover:bg-red-400 hover:text-white hover:border-red-400 cursor-pointer"
                    href={"/"}
                >
                    <Power size={24} />
                </Link>
            </div>
        </div>
    );
}
