export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  return (
    <div>
      <div className="text-4xl tracking-[-0.015em] font-light">
        <p className="text-white/70">
          Showy aims to become the
          <br />
          <span className="font-bold text-white">
            central collaboration platform
          </span>{" "}
          for
          <br />
          the{" "}
          <span className="font-bold text-white">
            next generation of creatives
          </span>
          .
        </p>
      </div>
    </div>
  );
}
