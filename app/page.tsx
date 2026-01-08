import AppLayout from "@/components/AppLayout";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div>    
      <AppLayout>

        <div className="w-full flex">
          <div className="w-full md:w-2/3">
            <div>
              
            </div>
          </div>
          <div className="w-full md:w-1/3"></div>
        </div>
      </AppLayout>
    </div>
  );
}
