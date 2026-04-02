import { CtaSection } from "@/Components/CtaSection";
import { ComparisonSection } from "@/Components/ComparisonSection";
import { HeroSection } from "@/Components/hero";
import { HomeHeader } from "@/Components/HomeHeader";
import { TopVpnSection } from "@/Components/TopVpnSection";
import { TrustSection } from "@/Components/TrustSection";
export default function TopVpnHomepage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HomeHeader />

      <main className=" ">
        <HeroSection />
        <TopVpnSection />
        <ComparisonSection />
        <TrustSection />
        <CtaSection />
        
      </main>
    </div>
  );
}
