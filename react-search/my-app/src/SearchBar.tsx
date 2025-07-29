import './SearchBar.css';

type Props = {
  onChange: (value: string) => void;
  input: string;
};

export function SearchBar({ onChange, input }: Props) {
  return (
    <form>
      <label className="search-bar">
        <input
          type="text"
          name="search-query"
          value={input}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </form>
  );
}
