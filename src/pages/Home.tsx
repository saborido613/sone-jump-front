import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-texture bg-repeat opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-5xl space-y-12">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white">
              Inicie sua <br className="hidden md:block" /> História
            </h1>

            <div className="flex justify-center">
              <Button onClick={() => navigate("/login")}>
                Descubra suas Skills
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
