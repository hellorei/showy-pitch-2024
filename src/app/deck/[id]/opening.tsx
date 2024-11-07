import { MoveRight, Smartphone, User, Youtube } from "lucide-react";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  return (
    <div>
      <div className="text-4xl tracking-[-0.015em] font-light relative -top-8">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <User
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <MoveRight
            className="text-slate-600 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <Smartphone
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <MoveRight
            className="text-slate-600 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <Youtube
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
        </div>
        <p className="text-white/70">
          Have you ever
          <br />
          <span className="font-bold text-white"> created content?</span>
        </p>
      </div>
      <p className="text-slate-600 italic text-xl tracking-wider font-medium mt-6 mx-auto text-center opacity-0">
        {"..."}
      </p>
    </div>
  );
}
