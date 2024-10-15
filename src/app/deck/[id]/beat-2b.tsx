export default function DeckPage() {
  return (
    <div className="flex">
      <div className="flex flex-col self-center">
        {/* 
      <div className="absolute inset-0 ">
        <Megaphone
          className="text-emerald-300 shrink-0 grow-0 w-72 h-72 transform -rotate-[38deg] absolute right-0 top-36"
          strokeWidth={1}
        />
      </div>
       */}
        <div className="text-left">
          <p className="text-indigo-400 uppercase text-2xl tracking-widest pb-6">
            A pain in the *** hands for creators, artists, producers, managers,
            and clients...
          </p>
          <div className="flex pb-6">
            <div className="flex text-[10rem] font-narrow font-semibold leading-[0.8] uppercase tracking-tighter relative right-2">
              But The Sh*w Must Go On!
            </div>
          </div>
          {/* 
        <div>Megaphone</div>
        <div>LEt's cut to the chase</div>
         */}
        </div>
      </div>
      <img src="/Mobflame_Emitter.gif" alt="Flame Icon" />
    </div>
  );
}
