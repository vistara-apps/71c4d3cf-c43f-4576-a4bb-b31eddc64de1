'use client';

import { Share2, Bell, ShoppingCart } from 'lucide-react';

interface ScannedItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  imageUrl: string;
  source: string;
  timestamp: Date;
}

interface PriceCardProps {
  item: ScannedItem;
}

export function PriceCard({ item }: PriceCardProps) {
  const handleShare = () => {
    console.log('Share item:', item.id);
  };

  const handleSetAlert = () => {
    console.log('Set alert for:', item.id);
  };

  const handleBuy = () => {
    console.log('Buy item:', item.id);
  };

  return (
    <div className="bg-surface rounded-xl border border-fg/10 overflow-hidden shadow-card animate-fade-in">
      {/* Item Image */}
      <div className="aspect-square bg-fg/5 flex items-center justify-center p-8">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>

      {/* Item Details */}
      <div className="p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-fg mb-1">{item.name}</h2>
          <p className="text-sm text-fg/60">
            Verified by {item.source}
          </p>
        </div>

        {/* Price Display */}
        <div className="bg-bg rounded-lg p-4 border border-primary/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-1">
              ${item.price.toFixed(2)}
            </div>
            <div className="text-sm text-fg/60">Current Price</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={handleShare}
            className="flex flex-col items-center gap-2 p-3 bg-bg hover:bg-fg/5 rounded-lg border border-fg/10 transition-all duration-200"
          >
            <Share2 className="w-5 h-5 text-primary" />
            <span className="text-xs text-fg">Share</span>
          </button>
          
          <button
            onClick={handleSetAlert}
            className="flex flex-col items-center gap-2 p-3 bg-bg hover:bg-fg/5 rounded-lg border border-fg/10 transition-all duration-200"
          >
            <Bell className="w-5 h-5 text-warning" />
            <span className="text-xs text-fg">Alert</span>
          </button>
          
          <button
            onClick={handleBuy}
            className="flex flex-col items-center gap-2 p-3 bg-bg hover:bg-fg/5 rounded-lg border border-fg/10 transition-all duration-200"
          >
            <ShoppingCart className="w-5 h-5 text-success" />
            <span className="text-xs text-fg">Buy</span>
          </button>
        </div>

        {/* Primary CTA */}
        <button
          onClick={handleBuy}
          className="w-full bg-primary hover:bg-accent text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-card"
        >
          Buy Now (Gasless)
        </button>

        {/* Additional Info */}
        <div className="pt-4 border-t border-fg/10 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-fg/60">Last Updated</span>
            <span className="text-fg font-medium">
              {item.timestamp.toLocaleTimeString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-fg/60">Network</span>
            <span className="text-fg font-medium">Base</span>
          </div>
        </div>
      </div>
    </div>
  );
}
