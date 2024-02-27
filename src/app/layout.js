import "./globals.css";
import NavbarMenuJapanAllPass from "@/app/components/navbar-menu-japan-all-pass/NavbarMenuJapanAllPass";
import FooterJapanAllPass from "@/app/components/footer-japan-all-pass/FooterJapanAllPass";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarMenuJapanAllPass />
        <main className="container mx-auto px-4 my-8 md:my-16">{children}</main>
        <FooterJapanAllPass />

        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
