import { MenuItem, SidebarItem, UserMenuItem } from "./type-definition";

// Main

export const menuItems: MenuItem[] = [
    {
        id: "1",
        title: "ابزار برقی",
        shortName: "",
        items: [
            {
                id: "1",
                title: "دریل ها",
                shortName: "",
                items: [
                    { id: "1", title: "دریل ساده", shortName: "" },
                    { id: "2", title: "دریل جکشی", shortName: "" },
                    { id: "3", title: "دریل گیربکسی", shortName: "" },
                ],
            },
            {
                id: "2",
                title: "دریل ها",
                shortName: "",
                items: [
                    { id: "1", title: "دریل ساده", shortName: "" },
                    { id: "2", title: "دریل جکشی", shortName: "" },
                    { id: "3", title: "دریل گیربکسی", shortName: "" },
                ],
            },
            {
                id: "3",
                title: "دریل ها",
                shortName: "",
                items: [
                    { id: "1", title: "دریل ساده", shortName: "" },
                    { id: "2", title: "دریل جکشی", shortName: "" },
                    { id: "3", title: "دریل گیربکسی", shortName: "" },
                ],
            },
            {
                id: "4",
                title: "دریل ها",
                shortName: "",
                items: [
                    { id: "1", title: "دریل ساده", shortName: "" },
                    { id: "2", title: "دریل جکشی", shortName: "" },
                    { id: "3", title: "دریل گیربکسی", shortName: "" },
                ],
            },
        ],
    },
    {
        id: "2",
        title: "ابزار برقی",
        shortName: "",
        items: [
            {
                id: "1",
                title: "دریل ها",
                shortName: "",
            },
            {
                id: "2",
                title: "دریل ها",
                shortName: "",
            },
            {
                id: "3",
                title: "دریل ها",
                shortName: "",
            },
            {
                id: "4",
                title: "دریل ها",
                shortName: "",
            },
        ],
    },
];

// Admin Panel

export const SidebarItems: SidebarItem[] = [
    {
        id: "6",
        title: "داشبورد",
        href: "dashboard",
    },
    {
        id: "1",
        title: "محصولات",
        href: "products",
    },
    {
        id: "2",
        title: "دسته بندی ها",
        href: "categories",
    },
    {
        id: "3",
        title: "کاربران",
        href: "users",
    },
    {
        id: "4",
        title: "سفارشات",
        href: "orders",
    },
    {
        id: "5",
        title: "نقش ها",
        href: "roles",
    },
];

export const userProfileItems: UserMenuItem[] = [
    {
        id: "1",
        title: "پروفایل",
        href: "#",
    },
    {
        id: "2",
        title: "تنظیمات حساب",
        href: "#",
    },
];
