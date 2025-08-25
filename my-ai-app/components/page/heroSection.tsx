import { MoveRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-16 bg-white mx-auto flex flex-col z-0 ">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-600 rounded-full border border-gray-400 px-4 py-2">
          <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
          <p>Được hỗ trợ bởi AI</p>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
          Khám phá sức mạnh của <span className="text-black">IntellectAI</span>
        </h1>

        <h2 className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
          Trợ lý AI thông minh giúp bạn tóm tắt tài liệu, tăng tốc công việc, và
          đưa ra quyết định hiệu quả hơn.
        </h2>

        <div className="">
          <Button
            variant="link"
            className="group flex items-center gap-2 text-white bg-black hover:bg-gray-900 cursor-pointer transition-colors text-sm sm:text-base md:text-lg rounded-full px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 mt-8 lg:mt-16 hover:no-underline duration-300 shadow-lg "
          >
            <Link href="/#pricing" className="flex gap-2 items-center w-full">
              <span className="text-sm">Thử IntellectAI</span>
            </Link>
            <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
