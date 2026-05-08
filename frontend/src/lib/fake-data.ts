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
                    { id: "4", title: "دریل سرکج", shortName: "" },
                    { id: "5", title: "دریل ستونی", shortName: "" },
                    { id: "6", title: "دریل مگنت", shortName: "" },
                ],
            },
            {
                id: "2",
                title: "بتن کن ، جکش تخریب",
                shortName: "",
                items: [
                    { id: "1", title: "بتن کن جهارشیار", shortName: "" },
                    { id: "2", title: "بتن کن پنج شیار", shortName: "" },
                    { id: "3", title: "جکش تخریب", shortName: "" },
                    { id: "4", title: "پیکور برقی", shortName: "" },
                    { id: "5", title: "بتن کن شارژی", shortName: "" },
                ],
            },
            {
                id: "3",
                title: "فرزها",
                shortName: "",
                items: [
                    { id: "1", title: "مینی فرز", shortName: "" },
                    { id: "2", title: "فرز متوسط", shortName: "" },
                    { id: "3", title: "فرز آهنگری", shortName: "" },
                    { id: "4", title: "فرز سنگبری", shortName: "" },
                ],
            },
            {
                id: "4",
                title: "ابزار برشی",
                shortName: "",
                items: [
                    { id: "1", title: "پروفیل بر", shortName: "" },
                    { id: "2", title: "قیچی برقی", shortName: "" },
                    { id: "3", title: "مولتی تولز / چندکاره", shortName: "" },
                    { id: "4", title: "اره نواری فلز بر", shortName: "" },
                    { id: "5", title: "شیارزن تک تیغ", shortName: "" },
                ],
            },
            {
                id: "5",
                title: "دیگر محصولات برقی",
                shortName: "",
                items: [
                    { id: "1", title: "اتو جوش لوله", shortName: "" },
                    { id: "2", title: "کارواش", shortName: "" },
                    { id: "3", title: "پیستوله برقی", shortName: "" },
                    { id: "4", title: "سشوار صنعتی", shortName: "" },
                ],
            }
        ],
    },
    {
        id: "2",
        title: "ابزار شارژی",
        shortName: "",
        items: [
            { id: "1", title: "دریل شارژی", shortName: "" },
            { id: "2", title: "میخکوب شارژی", shortName: "" },
            { id: "3", title: "بکس شارژی", shortName: "" },
            { id: "4", title: "مینی فرز شارژی", shortName: "" },
            { id: "5", title: "پیج گوشتی شارژی", shortName: "" },
            { id: "6", title: "پولیش شارژی", shortName: "" },
            { id: "7", title: "بتن کن شارژی", shortName: "" },
            { id: "8", title: "اره عمود بر شارژی", shortName: "" },
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
