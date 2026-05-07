// Menu

export type MenuItem = {
    id: string;
    title: string;
    shortName: string;
    items?: MenuItem[];
};

// Admin Panel

export type SidebarItem = {
    id: string;
    title: string;
    href: string;
};

export type UserMenuItem = {
    id: string;
    title: string;
    href: string;
};
