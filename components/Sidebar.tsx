import { HomeIcon } from "@heroicons/react/24/outline"

const navItems = [
    {
        label: "Home",
        icon: HomeIcon,
        link: '#',
        active: true,
    },
    {
        label: "Home",
        icon: HomeIcon,
        link: '#',
        active: true,
    },
    {
        label: "Home",
        icon: HomeIcon,
        link: '#',
        active: true,
    },
    {
        label: "Home",
        icon: HomeIcon,
        link: '#',
        active: true,
    },
    {
        label: "Home",
        icon: HomeIcon,
        link: '#',
        active: true,
    }
]
export default function Sidebar () {
    return (
        <>
            <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col h-full z-20">
                <div className="px-6 pt-6 pb-2 flex items-center space-x-3">
                    <span className="text-xl font-bold text-slate-800 tracking-tight">Workbench</span>
                </div>

                <nav className="flex-1 flex flex-col px-4 space-y-6 overflow-y-auto py-4">
                    {
                        navItems.map((nav, key) => (
                            <a key={key} className="inline-flex space-x-2 items-center text-gray-500 hover:text-blue-500">
                                <nav.icon className="size-5" />
                                <span>{nav.label}</span>
                            </a>
                        ))
                    }
                </nav>
            </aside>
        </>
    )
}
