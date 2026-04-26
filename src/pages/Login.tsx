import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login as loginUser } from "../services/login/login";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!username || !password) {
      setErrorMessage("Preencha todos os campos.");
      return;
    }

    try {
      setIsLoading(true);
      await loginUser({ username, password });
      navigate("/quiz");
    } catch (error) {
      console.error(error);
      setErrorMessage("Credenciais incorretas. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-texture bg-repeat opacity-15 pointer-events-none" />

      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-purple-500 font-bold tracking-widest uppercase text-sm">
                Plataforma de Evolução Profissional
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase">
                Construa sua <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  próxima fase
                </span>{" "}
                <br />
                na tecnologia.
              </h1>
              <p className="text-zinc-400 text-lg max-w-md">
                Entenda seu nível atual e siga uma trilha personalizada para
                chegar no seu objetivo profissional.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-2xl">
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-2">
                  Entrar na plataforma
                </h2>
                <p className="text-zinc-500 text-sm">
                  Acesse sua conta para continuar sua jornada.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Usuário
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    placeholder="Usuario"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Senha
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Sua senha"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-400 text-xs font-semibold text-center -mt-2">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-900/20 transition-all active:scale-95 uppercase tracking-widest text-sm"
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </button>

                <div className="flex justify-between items-center text-sm pt-4">
                  <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Criar conta
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/forgot-password")}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Esqueci minha senha
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
