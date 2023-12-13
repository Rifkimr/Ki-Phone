"use client";
import { Avatar } from "@mui/material";
import Link from "next/link";
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { User } from "@prisma/client";
import { SafeUser } from "@/type";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tonggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={tonggleOpen}
          className="p-2 border-[2px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        >
          <Avatar src={currentUser?.image} />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div
            className="absolute 
           rounded-md 
           shadow-md 
           w-[170px]
           bg-white 
           overflow-hidden 
           right-0 
           top-12 
           text-sm 
           flex 
           flex-col 
           cursor-pointer"
          >
            {currentUser ? (
              <div>
                <Link href="/orders">
                  <MenuItem onClick={tonggleOpen}>Yours Order</MenuItem>
                </Link>
                <Link href="/admin">
                  <MenuItem onClick={tonggleOpen}>Admin DashBoard</MenuItem>
                </Link>
                <hr />
                <MenuItem
                  onClick={() => {
                    tonggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <MenuItem onClick={tonggleOpen}>Login</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={tonggleOpen}>Register</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={tonggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
