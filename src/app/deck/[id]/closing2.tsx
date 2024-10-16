export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  return (
    <div>
      <div className="text-4xl tracking-tight font-light text-white/70">
        <p className="">
          An ecosystem where creatives can
          <br />
          <span className="font-bold text-white">focus</span>,{" "}
          <span className="font-bold text-white">grow</span>,{" "}
          <span className="font-bold text-white">thrive</span>.
        </p>
      </div>
    </div>
  );
}
