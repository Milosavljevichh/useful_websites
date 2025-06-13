import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveDrawer from "./components/Drawer";
import EmotionProvider from "@/EmotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Useful Websites",
  description: "A collection of useful websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <EmotionProvider>
            <ResponsiveDrawer>
              {children}
            </ResponsiveDrawer>
          </EmotionProvider>
        </main>
      </body>
    </html>
  );
}
