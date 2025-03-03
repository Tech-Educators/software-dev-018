import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Userz",
  description: "Where all cool people converge",
  openGraph : {
    title: 'Userz',
    description: 'Where all userz converge. Join now!',
    type: 'website',
    images: ["og-image.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <h2>Userz</h2>
        {children}
      </body>
    </html>
  );
}
