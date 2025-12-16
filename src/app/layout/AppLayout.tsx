import { Outlet } from "react-router-dom";
import Footer from "@/components/common/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
