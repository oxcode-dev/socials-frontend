import AppLayout from "@/components/AppLayout";
import Sidebar from "@/components/Sidebar";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div>    
      <AppLayout>

        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-2/3">
            <div>
              <div className="card bg-gray-100 w-full shadow-sm px-4 py-2 space-y-2">
                <div className="w-full flex justify-between">
                  <div className="inline-flex space-x-2 items-center">
                    <img 
                      src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-7.jpg"
                      className="size-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">Osemeke Samuel</p>
                      <p className="text-xs font-light text-gray-500">2 hours age</p>
                    </div>

                  </div>
                  <div>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-gray-600">
                        <EllipsisHorizontalIcon className="size-5" />
                      </div>
                      <div
                        tabIndex={0}
                        className="card card-sm dropdown-content bg-base-100 rounded-box z-1 w-48 shadow-sm"
                      >
                        <div tabIndex={0} className="card-body">
                          <h2 className="card-title">You needed more info?</h2>
                          <p>Here is a description!</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <figure className="">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>

                <div className="card-body p-2 px-0">
                  <h2 className="card-title">Card Title</h2>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
              </div>
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
