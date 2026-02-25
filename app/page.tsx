import Header from '@/components/Header';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import UseCases from '@/components/UseCases';
import PainPoints from '@/components/PainPoints';
import ROIEvidence from '@/components/ROIEvidence';
import CountryDeepDive from '@/components/CountryDeepDive';
import AICopilot from '@/components/AICopilot';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <ExecutiveSummary />
        <UseCases />
        <PainPoints />
        <ROIEvidence />
        <CountryDeepDive />
        <AICopilot />
        <Footer />
      </main>
    </>
  );
}
