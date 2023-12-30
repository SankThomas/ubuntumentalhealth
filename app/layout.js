import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://ubuntumentalhealth.vercel.app"),
  title: {
    default: "Ubuntu Mental Health",
    template: "%s - Ubuntu Mental Health",
  },
  description:
    "Ubuntu Mental Health is a non-profit organization that supports young mothers in Kenya through mental health and basic needs support and environmental action. 🌱",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
