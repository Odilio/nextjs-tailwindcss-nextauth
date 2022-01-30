import {
   ChevronDownIcon,
   HeartIcon,
    HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
function Center () {
   const { data: session, status} = useSession();

   console.log("session  ", session)
    return ( 
        <div className="flex flex-grow ">
           hi
            <header>
               <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full
               p-1 pr-2">
                  <img className="rounded-full w-10 h-10" src={session?.user?.image}></img>
                  <h2>{session?.user?.name}</h2>
                  <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
               </div>
            </header>
        </div>
     )
   
}

export default Center;