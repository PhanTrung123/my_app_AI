import Link from "next/link";

export default function Header() {
  return (
    <nav className="container flex items-center ">
      <div>
        <Link href="/">Chatbox AI</Link>
      </div>
      <div>
        <Link href="/#pricing">Giá Cả</Link>
      </div>

      <div>
        <Link href="/sign-in">Đăng Nhập</Link>
      </div>
    </nav>
  );
}
