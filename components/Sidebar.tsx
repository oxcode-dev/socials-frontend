import { ArrowRightIcon, HomeIcon, MagnifyingGlassIcon, EnvelopeIcon, BellAlertIcon, UserIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"

const navItems = [
    {
        label: "Home",
        icon: HomeIcon,
        link: '#',
        active: true,
    },
    {
        label: "Search",
        icon: MagnifyingGlassIcon,
        link: '#',
        active: true,
    },
    {
        label: "Messages",
        icon: EnvelopeIcon,
        link: '#',
        active: true,
    },
    {
        label: "Notifications",
        icon: BellAlertIcon,
        link: '#',
        active: true,
    },
    {
        label: "Profile",
        icon: UserIcon,
        link: '#',
        active: true,
    },
    {
        label: "Log Out",
        icon: ArrowRightStartOnRectangleIcon,
        link: '#',
        active: true,
    }
]
export default function Sidebar () {
    return (
        <aside className="w-64 fixed top-0 left-0 bottom-0 z-50">
            <div className="w-full bg-white border-r border-gray-200 flex-shrink-0 flex flex-col h-full">
                <div className="px-6 pt-6 pb-2 flex items-center space-x-3">
                    <span className="text-xl font-bold text-slate-800 tracking-tight">Socials</span>
                </div>

                <nav className="flex-1 flex flex-col overflow-y-auto py-4">
                    {
                        navItems.map((nav, key) => (
                            <a key={key} className="inline-flex text-base space-x-3 items-center text-gray-500 hover:text-blue-500 hover:bg-blue-50 py-2 px-3">
                                <nav.icon className="size-5" />
                                <span>{nav.label}</span>
                            </a>
                        ))
                    }
                </nav>

                <div>
                    <div className="pb-4 px-2">
                        <div className="inline-flex items-center justify-between w-full">
                            <div className="space-x-3 flex items-center">
                                <span className="bg-gray-200 size-8 p-2 text-sm text-gray-600 rounded-full inline-flex items-center justify-center">OS</span>
                                <p className="inline-flex flex-col text-sm font-medium text-gray-600 -space-y-0.5">
                                    <span>Osemeke Samuel</span>
                                    <span className="font-light text-xs">@oxcode__</span>
                                </p>
                            </div>
                            {/* <p>
                                <ArrowRightIcon className="size-5" />
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
