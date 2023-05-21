import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Booking App",
  description: "Booking App by Maruf H using Next",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
