import Sidebar from "./Sidebar";

type PropType = {
    children: any
}

export default function AppLayout ({ children }: PropType) {
    return (
        <>
            <div className="flex min-h-screen bg-zinc-50 font-sans">
                <Sidebar />
                <div className="w-full md:ml-64 text-gray-500">
                    {children}
                </div>
            </div>
        </>
    )
}

