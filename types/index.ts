
export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface User {
    id: number;
    first_name: string;
    name: string;
    last_name: string;
    email: string;
    phone: string;
    avatar?: string;
    [key: string]: unknown; // This allows for additional properties...
}
