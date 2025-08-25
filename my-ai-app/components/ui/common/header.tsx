import { Bot, Tag, FileText, FileUp } from "lucide-react";
import NavLink from "./navLink";
import { Button } from "../button";

export default function Header() {
  const loggedIn = false;

  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-4 lg:py-6 lg:px-8">
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-300 ease-in-out cursor-pointer" />
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <span className="font-bold lg:text-xl text-gray-900">
            IntellectAI
          </span>
        </NavLink>
      </div>

      <div className="hidden lg:justify-center lg:items-center md:flex items-center gap-6 lg:gap-12">
        <NavLink href="/#pricing" className="flex items-center gap-2 ">
          <Tag className="w-5 h-5 " />
          Gói Dịch Vụ
        </NavLink>

        {loggedIn ? (
          <div className="flex items-center gap-4">
            <NavLink href="/upload">
              <FileUp className="w-5 h-5" />
              Tải file PDF
            </NavLink>
            <NavLink href="/dashboard">
              <FileText className="w-5 h-5" />
              Tóm tắt của bạn
            </NavLink>
            <div className="text-sm bg-gray-100 px-2 py-1 rounded">Pro</div>
            <Button>User</Button>
          </div>
        ) : (
          <NavLink href="/sign-in">Đăng Nhập</NavLink>
        )}
      </div>

      <div className="md:hidden">
        <NavLink href="/sign-in">Đăng Nhập</NavLink>
      </div>
    </nav>
  );
}
