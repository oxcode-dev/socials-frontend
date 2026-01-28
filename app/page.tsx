import AppLayout from "@/components/AppLayout";
import TimeLineCard from "@/components/TimeLineCard";

export default function Home() {
  return (
    <div>    
      <AppLayout>

        <div className="w-full flex flex-wrap px-2 md:px-8">
          <div className="w-full md:w-2/3">
            <div className="space-y-6 py-4 pt-0 pr-4">
              <TimeLineCard />
              <TimeLineCard />
              <TimeLineCard />
              <TimeLineCard />
              <TimeLineCard />
              <TimeLineCard />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="px-2 pl-4">

              <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">
                <div className="flex justify-between text-black dark:text-white">
                  <h3 className="font-bold text-base"> Peaple You might know </h3>
                  <button type="button">
                    link
                  </button>
                </div>
                <div className="space-y-4 capitalize text-xs font-normal mt-5 mb-2 text-gray-500 dark:text-white/80">
                  <div className="flex items-center gap-3">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-7.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          {" "}
                          Johnson smith
                        </h4>
                      </a>
                      <div className="mt-0.5"> Suggested For You </div>
                    </div>
                    <button
                      type="button"
                      className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                    >
                      {" "}
                      Follow{" "}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          {" "}
                          James Lewis
                        </h4>
                      </a>
                      <div className="mt-0.5"> Followed by Johnson </div>
                    </div>
                    <button
                      type="button"
                      className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                    >
                      {" "}
                      Follow{" "}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          {" "}
                          John Michael
                        </h4>
                      </a>
                      <div className="mt-0.5"> Followed by Monroe</div>
                    </div>
                    <button
                      type="button"
                      className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                    >
                      {" "}
                      Follow{" "}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          {" "}
                          Monroe Parker
                        </h4>
                      </a>
                      <div className="mt-0.5"> Suggested For You </div>
                    </div>
                    <button
                      type="button"
                      className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                    >
                      {" "}
                      Follow{" "}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-4.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          {" "}
                          Martin Gray
                        </h4>
                      </a>
                      <div className="mt-0.5"> Suggested For You </div>
                    </div>
                    <button
                      type="button"
                      className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                    >
                      {" "}
                      Follow{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </AppLayout>
    </div>
  );
}

