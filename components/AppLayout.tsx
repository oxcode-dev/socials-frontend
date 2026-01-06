import Sidebar from "./Sidebar";

type PropType = {
    children: any
}

export default function AppLayout ({ children }: PropType) {
    return (
        <>
            <div className="flex min-h-screen bg-zinc-50 font-sans">
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

