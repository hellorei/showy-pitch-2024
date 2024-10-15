export default function DeckPage({ current }: { current?: boolean }) {
  return (
    <div className="flex-col">
      <div className="text-left mb-0">
        <p className="text-indigo-400 uppercase text-2xl tracking-widest pb-6">
          The Creative Industry
        </p>
        <div className="flex-col">
          <h1 className="font-sans text-[5.5rem] leading-[0.86em] mt-4 font-black">
            <span className="font-narrow text-[10rem] tracking-tight">
              <span className="text-[8rem] relative bottom-2 pr-3 font-light">
                $
              </span>
              280
              <span className="text-9xl font-black pl-4">Bn</span>
            </span>
            <br />
            <span className="font-light tracking-tight text-emerald-400 uppercase">
              growing
            </span>
          </h1>
          <div className="flex text-[17.5rem] font-narrow font-semibold pl-3 leading-[0.7] uppercase tracking-tight">
            M<div className="transform -rotate-12">e</div>ss
            {/* <div className="transform rotate-45">s</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
