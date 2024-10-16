export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  return (
    <div>
      <div>
        <h1>The Ask</h1>
        <p className="text-lg">
          Funding amount
          <br />
          What we are looking for beyond funding (contacts, mentors, advisors,
          operative support)
          <br />
          How the funding will be used.
          <br />
          <br />
          <br />
          Pre-Seed: X money / KISS SAFE /or CN - X Users - X Revenue
          <br />
          Refine MVP - growth hack - Key partners - Seed round
          <br />
          <br />
          Seed: Priced round ~2M - X Users - X Revenue
          <br />
          team - influencers partnerships - positioning - business scaling -
          Series A
          <br />
          <br />
          Series A: Priced round ~10M-20M - X Users - X Revenue
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
