import { useState } from 'react';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  function validate(password: string | undefined): string | undefined {
    if (password === undefined) return undefined;
    const trimmed = password.trim();
    if (!trimmed) return 'A password is required.';
    if (!/\d/g.test(trimmed)) return 'Password must contain a number.';
    if (!/[A-Z]/g.test(trimmed))
      return 'Password must contain a capital letter.';
    if (!/[!@#$%^&*()]/g.test(trimmed))
      return 'Password must contain a special character [!@#$%^&*()].';
    return undefined;
  }

  const statement = validate(password);

  return (
    <div>
      <label>
        Password
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="validate">{statement}</div>
      </label>
    </div>
  );
}
