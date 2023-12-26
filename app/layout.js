import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metaDataBase: "https://ubuntumentalhealth.netlify.app",
  title: {
    default: "Ubuntu Mental Health",
    template: "%s - Ubuntu Mental Health",
  },
  description:
    "Ubuntu Mental Health is a non-profit organization that supports young mothers in Kenya through mental health and basic needs support and environmental action. 🌱",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
