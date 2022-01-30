import {
   HeartIcon,
    HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
function Center () {
   const { data: session, status} = useSession();

   console.log("session  ", session)
    return ( 
        <div className="flex flex-grow">
           hi

        </div>
     )
   
}

export default Center;