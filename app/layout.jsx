import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "Fərdi müştərilər | Ultel",
  description:
    " Fərdi müştərilər | Ultel | İnternet Provayder, simsiz, fiber optik internet",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
