'use client'
import Link from 'next/link';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { FileCode2 } from 'lucide-react';
import { ConnectButton, WalletProvider } from '@mysten/dapp-kit';
import { Networks } from './network';
import { useNetwork } from '@/hooks/NetworkContext';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <FileCode2 className="h-6 w-6 text-primary" />
            <span className="hidden font-bold font-headline sm:inline-block">
              VsMove 
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Explain
            </Link>
            <Link
              href="/store"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Store
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <ThemeToggle />
            <Networks/>
            <ConnectButton connectText="Login"/>
        </div>
      </div>
    </header>
  );
}
