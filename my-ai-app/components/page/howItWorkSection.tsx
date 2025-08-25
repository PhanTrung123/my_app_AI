import { BrainCog, FileOutput, FileText } from "lucide-react";
import { ReactNode } from "react";

// type Step là một đối tượng mô tả từng bước trong quá trình
type Step = {
  icon: ReactNode;
  title: string;
  description: string;
};

// Danh sách các bước mô tả cách hoạt động của IntellectAI
const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    title: "Tải lên PDF",
    description:
      "Chọn file PDF bạn muốn tóm tắt. Hỗ trợ nhiều định dạng tài liệu.",
  },
  {
    icon: <BrainCog size={64} strokeWidth={1.5} />,
    title: "Phân tích nội dung ",
    description:
      "IntellectAI sẽ phân tích nội dung tài liệu, hiểu cấu trúc và ý chính.",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    title: "Nhận bản tóm tắt",
    description:
      "Chỉ trong vài giây, bạn sẽ nhận được bản tóm tắt ngắn gọn, dễ hiểu.",
  },
];

export default function HowItWorkSection() {
  return (
    <section className="relative overflow-hidden bg-gray-100">
      <div className="w-full py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <div className="text-center mb-16">
          <h2 className="uppercase mb-4 text-yellow-600 font-extrabold">
            Nó hoạt động như thế nào?
          </h2>
          <h3 className="mt-4 text-lg md:text-xl text-gray-900 font-bold max-w-2xl mx-auto">
            Chuyển đổi bất kỳ file PDF nào thành bản tóm tắt dễ hiểu chỉ với 3
            bước đơn giản
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <StepItem key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

// chức năng để hiển thị từng bước trong quá trình
function StepItem({ icon, title, description }: Step) {
  return (
    <div className="border  flex flex-col relative p-6 shadow-lg rounded-2xl backdrop-blur-sm group w-full hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent group-hover:from-yellow-500/20 transition-colors duration-300">
        <div className="text-yellow-600 text-4xl">{icon}</div>
      </div>
      <div className="flex flex-col items-center text-center mt-6">
        <h4 className="font-bold text-xl ">{title}</h4>
        <p className="px-4 text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
}
