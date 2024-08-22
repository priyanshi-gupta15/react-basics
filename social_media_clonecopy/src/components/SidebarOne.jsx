/* eslint-disable react/prop-types */

import { GiFeather } from "react-icons/gi";
import { House, UsersRoundIcon, Brush, Wrench }
 from 'lucide-react'
 import { MdTipsAndUpdates } from "react-icons/md";
 import "../App.css"
 

export function SidebarOne({selectTab ,setSelectTab}) {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r px-5 py-8 bg-slate-50">
      <a href="#">
        {/* =====================logo================ */}
      <span>
          <GiFeather className="bg-red-300 rounded-full h-10 w-10 p-1 inline-block mx-1"></GiFeather >
           
          </span>
          <span className="font-bold">social</span>
          {/* ===================end of logo ========== */}
       </a>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
           
            <a className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${selectTab==="Home" &&"bg-red-300" } ` }
              href="#" onClick={() => {setSelectTab("Home")}}
            >  
            {/* =========home===== */}
              <House className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Home</span>
            </a>
            <a className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${selectTab==="Profile"  &&"bg-red-300" } ` }
              href="#" onClick={() => {setSelectTab("Profile")}}
            >

              {/* =========profile========= */}
              <UsersRoundIcon className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Profile</span>
            </a>
            <a className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${selectTab==="Create post"  &&"bg-red-300" }` }
              href="#" onClick={() => {setSelectTab("Create post")}}
            >

              {/* =========post========= */}
              <MdTipsAndUpdates  className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Create post</span>
            </a>
          
           
           {/* ================customization============ */}
          
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Brush className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Themes</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wrench className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Setting</span>
            </a>
            </div>
        </nav>
      </div>
    </aside>
  )


}

