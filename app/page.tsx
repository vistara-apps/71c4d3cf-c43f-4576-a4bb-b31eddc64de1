'use client';

import { useState, useEffect } from 'react';
import { Camera, Search, Bell, Home, Settings2 } from 'lucide-react';
import { CameraView } from './components/CameraView';
import { PriceCard } from './components/PriceCard';
import { BottomNav } from './components/BottomNav';
import { Header } from './components/Header';

interface ScannedItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  imageUrl: string;
  source: string;
  timestamp: Date;
}

export default function Home() {
  const [showCamera, setShowCamera] = useState(false);
  const [scannedItem, setScannedItem] = useState<ScannedItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleScan = async (imageData: string) => {
    setIsLoading(true);
    
    // Simulate API call to image recognition and price lookup
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock scanned item data
    const mockItem: ScannedItem = {
      id: '1',
      name: 'Terracotta Plant Pot',
      price: 10.99,
      currency: 'USD',
      imageUrl: imageData,
      source: 'Verified Marketplace',
      timestamp: new Date(),
    };
    
    setScannedItem(mockItem);
    setShowCamera(false);
    setIsLoading(false);
  };

  const handleCloseScan = () => {
    setShowCamera(false);
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20">
        {showCamera ? (
          <CameraView 
            onCapture={handleScan} 
            onClose={handleCloseScan}
            isLoading={isLoading}
          />
        ) : (
          <div className="px-4 py-6 space-y-6">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-8">
              <h1 className="text-4xl font-bold text-fg">
                Scan & Verify Prices
              </h1>
              <p className="text-lg text-fg/70 max-w-md mx-auto">
                Get transparent, onchain pricing for any physical item
              </p>
              
              <button
                onClick={() => setShowCamera(true)}
                className="mt-6 w-full max-w-sm mx-auto flex items-center justify-center gap-3 bg-primary hover:bg-accent text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-card"
              >
                <Camera className="w-6 h-6" />
                Scan Item
              </button>
            </div>

            {/* Scanned Item Display */}
            {scannedItem && (
              <div className="animate-fade-in">
                <PriceCard item={scannedItem} />
              </div>
            )}

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <FeatureCard
                icon={<Search className="w-6 h-6" />}
                title="Search"
                description="Find verified prices"
              />
              <FeatureCard
                icon={<Bell className="w-6 h-6" />}
                title="Alerts"
                description="Price notifications"
              />
            </div>

            {/* Recent Scans */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-fg mb-4">
                Recent Scans
              </h2>
              <div className="space-y-3">
                <RecentScanItem 
                  name="Ceramic Mug"
                  price="$8.99"
                  time="2 hours ago"
                />
                <RecentScanItem 
                  name="Wooden Spoon Set"
                  price="$15.49"
                  time="5 hours ago"
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-surface p-4 rounded-lg border border-fg/10 hover:border-primary/50 transition-all duration-200">
      <div className="text-primary mb-2">{icon}</div>
      <h3 className="font-semibold text-fg mb-1">{title}</h3>
      <p className="text-sm text-fg/60">{description}</p>
    </div>
  );
}

function RecentScanItem({ name, price, time }: { 
  name: string; 
  price: string; 
  time: string;
}) {
  return (
    <div className="bg-surface p-4 rounded-lg border border-fg/10 flex justify-between items-center">
      <div>
        <h4 className="font-medium text-fg">{name}</h4>
        <p className="text-sm text-fg/60">{time}</p>
      </div>
      <div className="text-lg font-bold text-primary">{price}</div>
    </div>
  );
}
