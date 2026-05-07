'use client';
import { SidebarItem } from "@/lib/type-definition";
import Link from "next/link";
import React, { JSX } from "react";
import { Package, LayoutGrid, Users, Shield, ShoppingCart, Gauge } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MenuItem(item: SidebarItem) {
    const pathname = usePathname();
    const splitPathname = pathname.split('/').filter(Boolean)

    console.log(splitPathname);
    console.log(pathname);
    
    const iconMap: Record<string, JSX.Element> = {
        داشبورد: <Gauge size={20}/>,
        محصولات: <Package size={20} />,
        "دسته بندی ها": <LayoutGrid size={20} />,
        کاربران: <Users size={20} />,
        "نقش ها": <Shield size={20} />,
        سفارشات: <ShoppingCart size={20} />,
    };
    return (
        <li className="admin-panel__menu-item h-16 w-full">
            <Link
                className={`menu-item ${pathname === `/admin-panel/${item.href}` ? 'bg-app-bg text-text-primary' : 'text-text-secondary hover:bg-app-bg hover:text-text-primary'}`}
                href={`/admin-panel/${item.href}`}
            >
                {/* icon */}
                <span>{iconMap[item.title]}</span>
                {/* text */}
                <span className="">{item.title}</span>
            </Link>
        </li>
    );
}
