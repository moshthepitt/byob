import './src/styles/global.css'

import React from "react"
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"

import {
  SolflareWalletAdapter,
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets"

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"

require('@solana/wallet-adapter-react-ui/styles.css');

export const wrapPageElement = ({ element }) => {
  const endpoint = process.env.RPC_ENDPOINT
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
  ]

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{element}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
