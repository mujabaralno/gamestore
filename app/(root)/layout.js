import Footer from "@/components/shared/Footer";
import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

export default function RootLayout({ children }) {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="">{children}</div>
      <Footer />
      </div>
    </main>
  );
}
