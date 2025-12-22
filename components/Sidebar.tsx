export default function Sidebar () {
    return (
        <>
            <div id="sidebar" className="fixed top-0 left-0 z-40 max-md:top-auto max-md:bottom-0">

                <div id="sidebar__inner" className="flex sside md:flex-col justify-between md:h-screen md:p-2 p-1 transition-all duration-500 bg-white shadow dark:bg-dark2 2xl:w-72 xl:w-60 max-xl:w-[73px] max-md:w-screen max-md:border-t max-md:dark:border-slate-700">

                    <div className="flex h-20 px-2 max-md:fixed max-md:top-0 max-md:w-full max-md:bg-white/80 max-md:left-0 max-md:px-4 max-md:h-14 max-md:shadow-sm max-md:dark:bg-slate-900/80 backdrop-blur-xl">
                        <a href="home.html" id="logo" className="flex items-center gap-3">
                            Logo
                        </a>
                    </div>

                    <nav className="flex-1 max-md:flex max-md:justify-around md:space-y-2">

                        <a href="home.html" className="active">
                            <span className="max-xl:hidden"> Home </span>
                        </a>
                    
                        <a href="#!" aria-haspopup="true" aria-expanded="false">
                            <span className="max-xl:hidden"> Search </span>
                        </a>  
                        <div className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px] uk-drop" uk-drop="animation: uk-animation-slide-left-small , uk-transform-origin-center-left ;animate-out: true; pos: left ; mode:click; offset: 9"> 
                            <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">

                                <div className="px-5 py-4 space-y-5 border-b border-gray-100 dark:border-slate-700">
                                    <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">Search</h3>

                                    <div className="relative -mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 absolute left-3 bottom-1/2 translate-y-1/2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                        </svg>
                                        <input type="text" placeholder="Search" className="bg-transparent w-full !pl-10 !py-2 !rounded-lg" />
                                    </div>

                                </div>

                                <div className="p-2 space-y-2 dark:text-white">

                                    <div className="flex items-center justify-between py-2.5 px-3 font-semibold">
                                        <h4>Recent</h4>
                                        <button type="button" className="text-blue-500 text-sm">Clear all</button>
                                    </div>

                                    <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                        <img src="assets/images/avatars/avatar-2.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-black dark:text-white">  Johnson smith </h4>
                                            <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Suggested For You </div>
                                        </div> 
                                    </a>
                                    <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                        <img src="assets/images/avatars/avatar-5.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-black dark:text-white"> James Lewis </h4>
                                            <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Followed By Johnson </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button> 
                                    </a>

                                    <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path>
                                        </svg>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-black dark:text-white">   artificial intelligence  </h4>
                                            <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> 13,352K post </div>
                                        </div> 
                                    </a>

                                    <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                        <img src="assets/images/avatars/avatar-3.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-black dark:text-white">  Monroe Parker </h4>
                                            <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Parker . following </div>
                                        </div> 
                                    </a>

                                    <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                        <img src="assets/images/avatars/avatar-7.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-black dark:text-white">  Johnson smith </h4>
                                            <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Suggested For You </div>
                                        </div> 
                                    </a>
                                    <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                        <img src="assets/images/avatars/avatar-4.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-black dark:text-white"> James Lewis </h4>
                                            <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Followed By Johnson </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button> 
                                    </a>
                                    
                                    <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path>
                                        </svg>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-black dark:text-white">  Ui Designers </h4>
                                            <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> 9,362K post </div>
                                        </div> 
                                    </a> 
                                    
                                    <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path>
                                        </svg>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-black dark:text-white"> Affiliate marketing  </h4>
                                            <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> 4,248K post </div>
                                        </div> 
                                    </a>

                                    <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                        <img src="assets/images/avatars/avatar-2.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-black dark:text-white">  Johnson smith </h4>
                                            <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Suggested For You </div>
                                        </div> 
                                    </a>
                                    <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                        <img src="assets/images/avatars/avatar-5.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-black dark:text-white"> James Lewis </h4>
                                            <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Followed By Johnson </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button> 
                                    </a>


                                </div>

                            </div>
                        </div> 

                        <a href="explore.html" className="max-md:!hidden">
                            <span className="max-xl:hidden"> Explore </span>
                        </a>  

                        <a href="messages.html" className="max-md:!fixed max-md:top-2 max-md:right-2">
                            <span className="max-xl:hidden"> Messages </span>
                        </a>
                        
                        <a href="reels.html">
                            <span className="max-xl:hidden"> reels </span>
                        </a>

                        <a href="#!" className="max-md:!fixed max-md:top-2 max-md:right-14 relative" aria-haspopup="true" aria-expanded="false"> 
                            <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                            </svg>
                            <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                            </svg>
                            <span className="max-xl:hidden"> Notifications </span>
                            <div className="w-2 h-2 bg-red-600 rounded-full absolute left-7 top-2.5"></div>
                        </a>
                        <div className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px] uk-drop" uk-drop="pos: left-center;animate-out: true; animation: uk-animation-slide-left-medium ; mode:click"> 
                            <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">

                                <div className="flex items-center justify-between px-5 py-4 mt-3">
                                    <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">Notification</h3>

                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="px-2 -mt-2 text-sm font-normal">

                                    <div className="px-5 py-3 -mx-2">
                                        <h4 className="font-semibold">New</h4>
                                    </div>

                                    <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                        <div className="relative w-12 h-12 shrink-0"> 
                                            <img src="assets/images/avatars/avatar-2.jpg" alt="" className="object-cover w-full h-full rounded-full" />
                                        </div>
                                        <div className="flex-1 "> 
                                            <p> <b className="font-bold mr-1"> John Michael</b> who you might know,  is on Instello.</p>
                                            <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 2 hours ago </div>
                                        </div>
                                        <button type="button" className="button text-white bg-primary">fallow</button>
                                    </a>
                                    <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery bg-teal-500/5">
                                        <div className="relative w-12 h-12 shrink-0">
                                            <img src="assets/images/avatars/avatar-3.jpg" alt="" className="object-cover w-full h-full rounded-full" />
                                        </div>
                                        <div className="flex-1 ">
                                            <p> <b className="font-bold mr-1"> Alexa Gray</b> started following you. Welcome him to your profile. 👋 </p>
                                            <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 4 hours ago </div>
                                            <div className="w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5"></div>
                                        </div>
                                    </a>
                                    <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery">
                                        <div className="relative w-12 h-12 shrink-0"> 
                                            <img src="assets/images/avatars/avatar-7.jpg" alt="" className="object-cover w-full h-full rounded-full" />
                                        </div>
                                        <div className="flex-1 ">
                                            <p> <b className="font-bold mr-1">Jesse Steeve</b> mentioned you in a story. Check it out and reply. 📣 </p>
                                            <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div> 
                                        </div>
                                    </a>
                                    

                                    <div className="border-t px-5 py-3 -mx-2 mt-4 dark:border-slate-700/40">
                                        <h4 className="font-semibold">This Week</h4>
                                    </div>

                                
                                    <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                        <div className="relative w-12 h-12 shrink-0"> 
                                            <img src="assets/images/avatars/avatar-4.jpg" alt="" className="object-cover w-full h-full rounded-full" />
                                        </div>
                                        <div className="flex-1 ">
                                            <p> <b className="font-bold mr-1"> Jesse Steeve</b> sarah tagged you <br /> in a photo of your birthday party. 📸 </p>
                                            <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                        </div> 
                                    </a>
                                    <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery bg-teal-500/5">
                                        <div className="relative w-12 h-12 shrink-0"> 
                                            <img src="assets/images/avatars/avatar-3.jpg" alt="" className="object-cover w-full h-full rounded-full" />
                                        </div>
                                        <div className="flex-1 ">
                                            <p> <b className="font-bold mr-1"> Sarah Gray</b> sent you a message. He wants to chat with you. 💖 </p>
                                            <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 4 hours ago </div>
                                            <div className="w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5"></div>
                                        </div>
                                    </a>
                                    <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                        <div className="relative w-12 h-12 shrink-0"> 
                                            <img src="assets/images/avatars/avatar-4.jpg" alt="" className="object-cover w-full h-full rounded-full" />
                                        </div>
                                        <div className="flex-1 ">
                                            <p> <b className="font-bold mr-1"> James Lewis</b> Start following you on instello </p>
                                            <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                        </div>
                                        <button type="button" className="button bg-primary-soft text-primary">fallowing</button>
                                    </a>
                                    <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery">
                                        <div className="relative w-12 h-12 shrink-0"> 
                                            <img src="assets/images/avatars/avatar-6.jpg" alt="" className="object-cover w-full h-full rounded-full" />
                                        </div>
                                        <div className="flex-1 ">
                                            <p> <b className="font-bold mr-1"> Alexa stella</b> commented on your photo  “Wow, stunning shot!” 💬 </p>
                                            <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div> 
                                        </div>
                                    </a>
                                    
                                </div>

                            </div>
                        </div> 

                        <a href="shop.html">
                            <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                            </svg>
                            <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd"></path>
                            </svg> 
                            <span className="max-xl:hidden"> Shop </span>
                        </a>

                        <a href="peaple.html" className="max-md:!hidden">
                            <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                            </svg>
                            <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden">
                                <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"></path>
                            </svg>
                            <span className="max-xl:hidden"> Peaple </span>
                        </a>
                        
                        <a href="!#">
                            <button uk-toggle="target: #create-post" className="flex items-center gap-3 w-full" aria-expanded="false">
                            <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd"></path>
                            </svg>
                            <span className="max-xl:hidden"> Create </span></button>
                        </a>
                        
                        <a href="components.html" className="max-md:!hidden">
                            <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"></path>
                            </svg>
                            <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                                <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z"></path>
                            </svg>
                            <span className="max-xl:hidden"> components </span>
                        </a>

                        <a href="profile.html" className="max-md:!hidden">
                            
                            <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"></path>
                            </svg>
                            <span className="max-xl:hidden"> Profile </span>
                        </a>

                    </nav>

                    <div>
                        <a id="profile-link" className="flex items-center gap-3 p-3 group"  aria-haspopup="true" aria-expanded="false">
                            <img src="assets/images/avatars/avatar-7.jpg" alt="" className="rounded-full md:w-7 md:h-7 w-5 h-5 shrink-0" />
                            <span className="font-semibold text-sm max-xl:hidden">  Monroe Parker </span>
                        </a>
                        <div className="bg-white sm:w-64 2xl:w-[calc(100%-16px)] w-full shadow-lg border rounded-xl overflow-hidden max-md:!top-auto max-md:bottom-16 border2 dark:bg-dark2 hidden uk-drop" uk-drop="animation:uk-animation-slide-bottom-medium ;animate-out: true">

                            <div className="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500"></div>

                            <div className="p-4 text-xs font-medium">
                                <a href="profile.html">
                                    <img src="assets/images/avatars/avatar-3.jpg" className="w-8 h-8 rounded-full" alt="" />
                                    <div className="mt-2 space-y-0.5">
                                        <div className="text-base font-semibold"> Monroe Parker </div>
                                        <div className="text-gray-400 dark:text-white/80"> @monroe </div>
                                    </div>
                                </a>
                                <div className="mt-3 flex gap-3.5">
                                    <div> <a href="profile.html"> <strong> 620K </strong> <span className="text-gray-400 dark:text-white/80 ml-1">Following </span> </a> </div>
                                    <div> <a href="profile.html"> <strong> 38k </strong> <span className="text-gray-400 dark:text-white/80 ml-1">Followers </span> </a>  </div>
                                </div>
                                    
                            </div>
                            <hr className="opacity-60" />
                            <ul className="text-sm font-semibold p-2">
                                {/* <li> <a href="setting.html" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="person-outline" className="text-lg md hydrated" role="img" aria-label="person outline"><template shadowrootmode="open"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Person</title><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" strokeLinecap="round" strokeLinejoin="round" className="ionicon-fill-none ionicon-strokeWidth"></path><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" stroke-miterlimit="10" className="ionicon-fill-none ionicon-strokeWidth"></path></svg></div></template></ion-icon> Profile     </a></li> */}
                                {/* <li> <a href="upgrade.html" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="bookmark-outline" className="text-lg md hydrated" role="img" aria-label="bookmark outline"><template shadowrootmode="open"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Bookmark</title><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" strokeLinecap="round" strokeLinejoin="round" className="ionicon-fill-none ionicon-strokeWidth"></path></svg></div></template></ion-icon> Upgrade </a></li>  */}
                                {/* <li> <a href="setting.html" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="settings-outline" className="text-lg md hydrated" role="img" aria-label="settings outline"><template shadowrootmode="open"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Settings</title><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" strokeLinecap="round" strokeLinejoin="round" className="ionicon-fill-none ionicon-strokeWidth"></path></svg></div></template></ion-icon> Acount Setting  </a></li> */}
                                {/* <li> <a href="form-login.html" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="log-out-outline" className="text-lg md hydrated" role="img" aria-label="log out outline"><template shadowrootmode="open"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Log Out</title><path d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" strokeLinecap="round" strokeLinejoin="round" className="ionicon-fill-none ionicon-strokeWidth"></path></svg></div></template></ion-icon> Log Out</a></li> */}
                            </ul>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}