import Sidebar from "./Sidebar";

export default function AppLayout () {
    return (
        <>
            <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
                <Sidebar />
            </div>
        </>
    )
}

