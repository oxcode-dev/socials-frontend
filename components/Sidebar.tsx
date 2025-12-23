import { EnvelopeIcon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Logo } from "./Logo";

export default function Sidebar () {
    return (
        <>
            <div id="sidebar" className="bg-green-600 fixed top-0 left-0 z-40 max-md:top-auto max-md:bottom-0">

                <div className="flex side md:flex-col justify-between md:h-screen md:p-2 p-1 transition-all duration-500 bg-white shadow 2xl:w-72 xl:w-60 max-xl:w-[73px] max-md:w-screen max-md:border-t max-md:dark:border-slate-700">

                    <div className="flex h-20 px-2 max-md:fixed max-md:top-0 max-md:w-full max-md:bg-white/80 max-md:left-0 max-md:px-4 max-md:h-14 max-md:shadow-sm max-md:dark:bg-slate-900/80 backdrop-blur-xl">
                        <a href="home.html" id="logo" className="flex items-center gap-3">
                            <Logo />
                        </a>
                    </div>

                    <nav className="flex-1 flex-col flex max-md:justify-around md:space-y-2 [&_a]:inline-flex [&_a]:items-center [&_a]:space-x-2">

                        <a href="home.html" className="">
                            <HomeIcon className="size-5" />
                            <span className="max-xl:hidden"> Home </span>
                        </a>
                    
                        <a href="#!" className="" aria-haspopup="true" aria-expanded="false">
                            <MagnifyingGlassIcon className="size-5" />
                            <span className="max-xl:hidden"> Search </span>
                        </a>  

                        <a href="explore.html" className="">
                            <span className="max-xl:hidden"> Explore </span>
                        </a>  

                        <a href="messages.html" className="max-md:!fixed max-md:top-2 max-md:right-2">
                            <EnvelopeIcon className="size-5" />
                            <span className="max-xl:hidden"> Messages </span>
                        </a>

                        <a href="#!" className="max-md:!fixed max-md:top-2 max-md:right-14 relative" aria-haspopup="true" aria-expanded="false"> 
                            <span className="max-xl:hidden"> Notifications </span>
                            <div className="w-2 h-2 bg-red-600 rounded-full absolute left-7 top-2.5"></div>
                        </a>
                        
                        <a href="!#">
                            <button uk-toggle="target: #create-post" className="flex items-center gap-3 w-full" aria-expanded="false">
                                <span className="max-xl:hidden"> Create </span>
                            </button>
                        </a>

                        <a href="profile.html" className="max-md:!hidden">
                            <span className="max-xl:hidden"> Profile </span>
                        </a>

                    </nav>

                    <div>
                        <a id="profile-link" className="flex items-center gap-3 p-3 group"  aria-haspopup="true" aria-expanded="false">
                            <img src="assets/images/avatars/avatar-7.jpg" alt="" className="rounded-full md:w-7 md:h-7 w-5 h-5 shrink-0" />
                            <span className="font-semibold text-sm max-xl:hidden">  Monroe Parker </span>
                        </a>
                        <div className="bg-white sm:w-64 2xl:w-[calc(100%-16px)] w-full shadow-lg border rounded-xl overflow-hidden max-md:!top-auto max-md:bottom-16 border-2 hidden uk-drop" uk-drop="animation:uk-animation-slide-bottom-medium ;animate-out: true">

                            <div className="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500"></div>

                            <div className="p-4 text-xs font-medium">
                                <a href="profile.html">
                                    <img src="assets/images/avatars/avatar-3.jpg" className="w-8 h-8 rounded-full" alt="" />
                                    <div className="mt-2 space-y-0.5">
                                        <div className="text-base font-semibold"> Monroe Parker </div>
                                        <div className="text-gray-400"> @monroe </div>
                                    </div>
                                </a>
                                <div className="mt-3 flex gap-3.5">
                                    <div> <a href="profile.html"> <strong> 620K </strong> <span className="text-gray-400 ml-1">Following </span> </a> </div>
                                    <div> <a href="profile.html"> <strong> 38k </strong> <span className="text-gray-400 ml-1">Followers </span> </a>  </div>
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