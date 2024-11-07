import {
  AudioLines,
  Clapperboard,
  Film,
  Mic,
  MoveRight,
  Palette,
  RadioTower,
  Rss,
  Share2,
  SquareChevronRight,
  Users,
  Video,
  Youtube,
} from "lucide-react";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  return (
    <div>
      <div className="text-4xl tracking-[-0.015em] font-light relative -top-8">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Users
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <MoveRight
            className="text-slate-600 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <Palette
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <Video
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <Clapperboard
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <Film
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <Mic
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <AudioLines
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <SquareChevronRight
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <MoveRight
            className="text-slate-600 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <RadioTower
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
          <Rss
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
          <Share2
            className="text-indigo-400 shrink-0 grow-0"
            size={36}
            strokeWidth={1}
          />
        </div>
        <p className="text-white/70">
          What about consistent, continuous,
          <br />
          <span className="font-bold text-white"> high-quality content?</span>
        </p>
      </div>
      <p className="text-slate-600 italic text-xl font-medium mt-6 mx-auto text-center">
        People who do is part of{" "}
        <span className="text-indigo-400">"The Creators Economy"</span>
      </p>
    </div>
  );
}
