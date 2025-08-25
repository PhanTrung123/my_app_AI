import HeroSection from "@/components/page/heroSection";
import IntroduceSection from "@/components/page/introduceSection";
import HowItWorkSection from "@/components/page/howItWorkSection";

export default function Home() {
  return (
    <div className="w-full relative">
      <div className="flex flex-col">
        <HeroSection />;
        <IntroduceSection />;
      </div>
      <HowItWorkSection />
    </div>
  );
}
