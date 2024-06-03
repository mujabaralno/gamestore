import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, RedirectToSignIn } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes';
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "O Games",
  description: "Free game to play",
  icons: {
    icon: '/assets/svg/ogame.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: [dark],
      variables: { colorPrimary: '#f5f5f5' },
      signIn: { 
        baseTheme: [dark], 
        variables: { colorPrimary: '#f5f5f5' }
      },
      layout: {
        socialButtonsPlacement: 'bottom',
        socialButtonsVariant: 'iconButton',
        termsPageUrl: 'https://clerk.com/terms'
      }
    }}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
