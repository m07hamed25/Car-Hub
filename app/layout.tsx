import "./globals.css";
import { NavBar, Footer } from "@/components";

export const metadata = {
  title: "Car Hub",
  description: "Discover Your Dream Car.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
