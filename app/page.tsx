import AppLayout from "@/components/AppLayout";
import Sidebar from "@/components/Sidebar";
import TimeLineCard from "@/components/TimeLineCard";
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/20/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div>    
      <AppLayout>

        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-2/3">
            <div className="space-y-6 py-4">
              <TimeLineCard />
              <TimeLineCard />
              <TimeLineCard />
              <TimeLineCard />
              <TimeLineCard />
              <TimeLineCard />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            hello world
          </div>
        </div>
      </AppLayout>
    </div>
  );
}
