import AppLayout from "@/components/AppLayout";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div>    
      <AppLayout>

        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-2/3">
            <div>
              <div className="card bg-gray-100 w-full shadow-sm">
                <figure className="px-4 pt-4">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Card Title</h2>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
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
