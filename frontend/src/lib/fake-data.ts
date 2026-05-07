import { MenuItem, UserMenuItem } from "./type-definition";

export const menuItems: MenuItem[] = [
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
        id: '1',
        title: 'پروفایل',
        href: '#'
    },
    {
        id: '2',
        title: 'تنظیمات حساب',
        href: '#'
    },
]
