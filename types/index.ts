
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
    username: string;
    name: string;
    last_name: string;
    email: string;
    phone: string;
    avatar?: string;
    is_private: boolean
    verified: boolean
    [key: string]: unknown; // This allows for additional properties...
}
