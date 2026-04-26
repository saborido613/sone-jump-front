import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Usuário cadastrado:", { name, email });
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black text-white flex items-center justify-center overflow-y-auto px-6">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-10">
        <div className="hidden md:flex flex-col gap-6">
          <span className="text-purple-500 font-bold tracking-[0.2em] uppercase text-xs">
            Junte-se à JUMP
          </span>
          <h1 className="text-5xl font-black leading-[0.9] uppercase break-words">
            Crie sua <br />
            <span className="text-purple-500">nova conta</span> <br />
            gratuitamente.
          </h1>
          <p className="text-zinc-500 text-lg max-w-sm leading-relaxed">
            Faça parte da plataforma que está transformando a carreira de
            desenvolvedores através de trilhas inteligentes.
          </p>
        </div>

        <div className="bg-[#0a0a0a] border border-zinc-900 p-10 md:p-14 rounded-[40px] shadow-2xl w-full max-w-[500px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Cadastrar-se</h2>
            <p className="text-zinc-600 text-sm">
              Preencha os dados abaixo para começar.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Nome Completo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="João Silva"
                className="w-full bg-[#050505] border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-600 transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full bg-[#050505] border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-600 transition-all text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Senha
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#050505] border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-600 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Confirmar
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#050505] border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-600 transition-all text-sm"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleRegister}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-black py-5 rounded-2xl mt-4 transition-all active:scale-[0.98] uppercase tracking-widest text-xs shadow-lg shadow-purple-900/20"
            >
              Criar minha conta
            </button>

            <p className="text-center text-sm pt-6 text-zinc-500">
              Já tem uma conta?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-purple-500 font-bold hover:underline"
              >
                Fazer Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
