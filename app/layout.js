import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Contact from "@/components/layout/contact";
import Footer from "@/components/layout/footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const cormorant_garamond = Cormorant_Garamond({
  weight: "400",
  variable: "--font-cormorant",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Montacqua",
  description:
    "Montacqua Resort is an intimate retreat inspired by its natural surroundings. Offering a blend of luxury and comfort, the resort features stylish accommodations, delectable dining options, and exceptional service. Unwind in the tranquil ambiance, savor exquisite cuisine, and create unforgettable memories. Immerse yourself in a world of elegance and relaxation at Montacqua.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${cormorant_garamond.variable}`}>
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
