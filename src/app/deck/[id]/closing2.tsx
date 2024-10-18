export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  return (
    <div className="pb-12">
      <div className="text-4xl tracking-tight font-light text-white/70">
        <img src="/treasure-chest.gif" className="w-28 mx-auto" alt="Icon" />
        <p className="py-2 pb-6">
          An ecosystem where creatives can
          <br />
          <span className="font-bold text-white">Focus</span>,{" "}
          <span className="font-bold text-white">Grow</span>,{" "}
          <span className="font-bold text-white">Thrive</span>.
        </p>
      </div>
    </div>
  );
}
