# PricePoint - Base Mini App

Scan, verify, and share prices onchain. A Farcaster Mini App built with Next.js 15, OnchainKit, and MiniKit.

## Features

- 📸 **Camera Scanning**: Scan physical items to get instant price verification
- 💰 **Onchain Pricing**: Transparent, verifiable pricing data from Base
- 🔔 **Price Alerts**: Set custom alerts for items you're watching
- 🤝 **Social Sharing**: Share price comparisons as Farcaster Frames
- ⚡ **Gasless Transactions**: Buy/sell with sponsored gas via Coinbase Paymaster
- 🎨 **Coinbase Theme**: Beautiful dark navy UI with Base blue accents

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com).

3. **Run development server**:
```bash
npm run dev
```

4. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
pricepoint/
├── app/
│   ├── components/
│   │   ├── Providers.tsx       # OnchainKit provider
│   │   ├── Header.tsx          # App header
│   │   ├── CameraView.tsx      # Camera interface
│   │   ├── PriceCard.tsx       # Price display
│   │   └── BottomNav.tsx       # Navigation
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── public/
│   └── .well-known/
│       └── farcaster.json      # Mini App manifest
└── package.json
```

## Key Features Implementation

### Camera Scanning
- Mobile-first camera interface
- Image capture and preview
- Loading states during analysis

### Price Verification
- Real-time price display
- Source verification
- Historical price tracking

### Social Integration
- Farcaster Frame generation
- Share to feed functionality
- Price alert notifications

### Gasless Transactions
- Coinbase Paymaster integration
- One-click buy/sell
- Transaction status tracking

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

Ensure your `.well-known/farcaster.json` manifest is accessible at:
`https://your-domain.com/.well-known/farcaster.json`

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: OnchainKit API key
- `NEXT_PUBLIC_BASE_RPC_URL`: Base mainnet RPC
- `NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL`: Base Sepolia testnet RPC
- `NEXT_PUBLIC_PAYMASTER_URL`: Paymaster service URL

## Learn More

- [Base Mini Apps Documentation](https://docs.base.org/mini-apps)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster MiniKit](https://miniapps.farcaster.xyz)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
