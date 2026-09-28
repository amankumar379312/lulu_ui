import React, { useState } from 'react';
import { TabType } from './types/index.ts';
import { Header } from './components/Header.tsx';
import { ExecutiveOverview } from './components/ExecutiveOverview.tsx';
import { PricingPowerModule } from './components/PricingPowerModule.tsx';
import { CatalystModule } from './components/CatalystModule.tsx';
import { MoatDurabilityModule } from './components/MoatDurabilityModule.tsx';
import { StructuralVsCyclicalModule } from './components/StructuralVsCyclicalModule.tsx';
import { DownsideFloorModule } from './components/DownsideFloorModule.tsx';
import { WhyModal, WhyModalData } from './components/WhyModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [whyModalData, setWhyModalData] = useState<WhyModalData | null>(null);

  const handleOpenWhy = (data: WhyModalData) => {
    setWhyModalData(data);
  };

  const handleCloseWhy = () => {
    setWhyModalData(null);
  };

  const handleNavigateFromWhy = (moduleTitle: string) => {
    const titleLower = moduleTitle.toLowerCase();
    if (titleLower.includes('pricing')) setActiveTab('pricingPower');
    else if (titleLower.includes('catalyst')) setActiveTab('catalyst');
    else if (titleLower.includes('moat')) setActiveTab('moat');
    else if (titleLower.includes('structural') || titleLower.includes('cyclical')) setActiveTab('structuralCyclical');
    else if (titleLower.includes('downside') || titleLower.includes('floor')) setActiveTab('downsideFloor');
    else setActiveTab('overview');
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#111827] font-sans antialiased flex flex-col selection:bg-[#795900]/15 selection:text-[#795900]">
      {/* Persistent Application Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Main Content Workbench */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'overview' && (
          <ExecutiveOverview
            onNavigateTab={setActiveTab}
            onOpenWhy={handleOpenWhy}
          />
        )}

        {activeTab === 'pricingPower' && (
          <PricingPowerModule onOpenWhy={handleOpenWhy} />
        )}

        {activeTab === 'catalyst' && (
          <CatalystModule onOpenWhy={handleOpenWhy} />
        )}

        {activeTab === 'moat' && (
          <MoatDurabilityModule onOpenWhy={handleOpenWhy} />
        )}

        {activeTab === 'structuralCyclical' && (
          <StructuralVsCyclicalModule onOpenWhy={handleOpenWhy} />
        )}

        {activeTab === 'downsideFloor' && (
          <DownsideFloorModule onOpenWhy={handleOpenWhy} />
        )}
      </main>

      {/* Forensic Why Explanation Modal */}
      <WhyModal
        isOpen={!!whyModalData}
        onClose={handleCloseWhy}
        data={whyModalData}
        onNavigateToModule={handleNavigateFromWhy}
      />

      {/* Institutional Methodology Footer */}
      <Footer />
    </div>
  );
}
