import { menuItems } from "@/lib/fake-data";
import MenuItem from "./panel/MenuItem";
import Link from "next/link";
import React from "react";
import { Power } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="bg-white h-full w-full col-span-2 rounded-2xl shadow-[0_0_10px_4px_rgba(0,0,0,5%)]">
            {/* logo */}
            <div className="font-aquire text-4xl font-bold py-4 border-b border-border text-center">
                HWT
            </div>
            {/* menu */}
            <div>
                {/* menu items */}
                <ul className="admin-panel__menu flex flex-col">
                    {/* item */}
                    {menuItems.map((item) => (
                        <MenuItem key={item.id} {...item} />
                    ))}
                </ul>
                {/* Logout button */}
                <Link href={'/'} className="menu-item h-16! text-red-400">
                    <Power size={20}/>
                    <span>خروج از سیستم</span>
                </Link>
            </div>
        </div>
    );
}
