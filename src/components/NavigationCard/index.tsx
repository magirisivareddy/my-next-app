
"use client"
import Link from "next/link";
import Card from "../Card";
import './navigationCard.css'
import { usePathname } from 'next/navigation';


export default function NavigationCard() {
    const pathname = usePathname();
    const activeElementClasses = 'text-sm md:text-md flex gap-1 md:gap-3 py-3 my-1 bg-socialBlue text-white md:-mx-7 px-6 md:px-7 rounded-md shadow-md shadow-gray-300 items-center';
    const nonActiveElementClasses = 'text-sm md:text-md flex gap-1 md:gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 rounded-md transition-all hover:scale-100 hover:shadow-md shadow-gray-300 items-center';
    const backgroundImageUrl = 'https://picsum.photos/seed/picsum/200/300'; // Replace '...' with your actual image URL
const buttonClass={
   
}
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        height: '100px',
        display: 'flex',
        alignItems: 'flex-end', // Align items at the bottom
        justifyContent: 'center', // Center items horizontallyneeded
        
    };

    return (<>
        <Card noPadding={true}>
            <div className="rounded-t-lg relative" style={containerStyle}>
            <div className="absolute bottom-[-40px] left-1/2 transform translate-x-[-50%] flex items-center justify-center bg-cover w-10 h-10 rounded-full border-2 border-white mb-4">
                    <img className="rounded-full" src="https://picsum.photos/200/300?grayscale" alt="test" />
                </div>
            </div>


            <div className="flex flex-col items-center mt-10">
                <p className=" font-bold mb-2">Siva</p>
                <p className="text-gray-400 text-xs mb-4">Senior technical associate</p>
            </div>
        </Card>

        <Card noPadding={true}>
            <div className="px-4 py-2 flex justify-between md:block shadow-md shadow-gray-500 md:shadow-none">
                <Link href="/profile/friends" className={pathname === '/profile/friends' ? activeElementClasses : nonActiveElementClasses}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    <span className="hidden md:block">Friends</span>
                </Link>
                <Link href="/saved" className={pathname === '/saved' ? activeElementClasses : nonActiveElementClasses}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                    <span className="hidden md:block">Saved posts</span>
                </Link>
                <Link href="/notifications" className={pathname === '/notifications' ? activeElementClasses : nonActiveElementClasses}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <span className="hidden md:block">Notifications</span>
                </Link>
                <button className="w-full -my-2">
                    <span className={nonActiveElementClasses}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        <span className="hidden md:block">Logout</span>
                    </span>
                </button>
            </div>
        </Card></>

    );
}