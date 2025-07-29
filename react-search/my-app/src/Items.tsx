import './Items.css';

export type Specify = {
  qualm: string;
  sources: string[];
};

export function Items({ qualm, sources }: Specify) {
  const match: string[] = [];

  for (let i = 0; i < sources.length; i++) {
    const passedTest = sources[i].toLowerCase().match(qualm.toLowerCase());
    if (passedTest) match.push(sources[i]);
  }
  const truth: string[] = sources.filter((item) =>
    item.toLowerCase().includes(qualm.toLowerCase())
  );
  if (truth.length === 0) return <p>No Matches</p>;
  return (
    <ul className="results">
      {truth.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}
