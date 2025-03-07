import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/structure/NavBar";

const ubuntu_mono = Ubuntu_Mono({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: "Somewhat Interesting",
  description: "Maybe interesting blog posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu_mono.className} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
