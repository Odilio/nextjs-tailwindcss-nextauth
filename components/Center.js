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
            <header className="absolute top-5 right-8">
               <div className="flex items-center bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full
               p-1 pr-2">
                  <img className="rounded-full w-10 h-10" src={session?.user?.image}/>
                  <h2>{session?.user?.name}</h2>
                  <ChevronDownIcon className="h-5 w-5"/>
                 
               </div>
              
            </header>
            <section className={`flex items-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 text-white padding-8 `}>
               <img className="rounded-full" src={session?.user?.image}/>
               hi
               </section>
        </div>
     )
   
}

export default Center;