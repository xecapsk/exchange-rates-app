"use client";
import { LogoutIcon } from "./logoutIcon";
import { UserIcon } from "./userIcon";

export const UserComponent = () => {
  const username = localStorage.getItem("username") || "User";

  return (
    <div className="rounded-full w-[170px] p-1 bg-white flex items-center border-gray-200 border max-h-[38px] justify-between">
      <div className="rounded-full bg-gray-200 p-1 w-[30px] h-[30px] flex items-center justify-center">
        <UserIcon />
      </div>
      <div className="text-sm font-medium text-gray-700">{username}</div>
      <div className="text-sm font-medium text-gray-400">
        <LogoutIcon />
      </div>
    </div>
  );
};
