import { CircleQuestionMark } from "lucide-react";

export default function IntroduceSection() {
  return (
    <section className="relative ">
      <div className="w-full py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Icon Box */}
        <div className="inline-flex items-center justify-center rounded-2xl backdrop-blur-xs mb-4 ">
          <CircleQuestionMark className="h-6 w-6 text-yellow-500 animate-pulse" />
        </div>

        {/* Heading */}
        <h3 className="mt-4 text-lg md:text-xl text-gray-900 font-bold max-w-2xl mx-auto">
          Biến{" "}
          <span className="text-yellow-600 font-extrabold">
            Next.js course PDF
          </span>{" "}
          này thành bản tóm tắt dễ hiểu và nhanh chóng. Tiết kiệm thời gian đọc,
          nắm bắt ý chính chỉ trong vài giây.
        </h3>
      </div>

      <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6"></div>
    </section>
  );
}
