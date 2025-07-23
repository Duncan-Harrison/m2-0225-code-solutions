import { useState } from 'react';

export function ValidatedInput() {
  const [password, setPassword] = useState('');
  const validNumber = /\d/g;
  const validCapital = /[A-Z]/g;
  const validSpecial = /[!@#$%^&*()]/g;

  const proofNumber = validNumber.test(password);
  const proofCapital = validCapital.test(password);
  const proofSpecial = validSpecial.test(password);

  function Bub() {
    let num = 'needs a number';
    let cap = 'needs a capitalized letter';
    let special = 'needs a special character [!@#$%^&*()]';
    if (proofNumber) {
      num = 'has a number';
    }
    if (proofCapital) {
      cap = 'has a capitalized letter';
    }
    if (proofSpecial) {
      special = 'has a special character';
    }
    return (
      <p>
        `Your password {cap}, {num}, {special}`
      </p>
    );
  }

  function Prove() {
    if (password === '') {
      return <p className="warning">A password is required.</p>;
    } else {
      return <Bub />;
    }
  }

  return (
    <div>
      <label>
        Password
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="validate">
          <Prove />
        </div>
      </label>
    </div>
  );
}
