import { useState, type FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputValues = formData.entries();
    for (const [key, value] of inputValues) {
      console.log(`${key}: ${value}`);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" name="Username" />
      <label>Password:</label>
      <input type="text" name="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export function RegistrationFormControlled() {
  const [usernameData, setUsernameData] = useState('');
  const [passwordData, setPasswordData] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(usernameData, passwordData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        name="Username"
        onChange={(u) => setUsernameData(u.target.value)}
      />
      <label>Password:</label>
      <input
        type="text"
        name="Password"
        onChange={(p) => setPasswordData(p.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export type User = {
  username: string;
  password: string;
};

type Props = {
  user?: User;
};

export function UserForm({ user }: Props) {
  const [usernameData, setUsernameData] = useState(user?.username ?? '');
  const [passwordData, setPasswordData] = useState(user?.password ?? '');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (user === undefined) {
      console.log('Created User: ', user);
    } else {
      user.username = usernameData;
      user.password = passwordData;
      console.log('Updated User: ', user);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        name="Username"
        value={usernameData}
        onChange={(u) => setUsernameData(u.target.value)}
      />
      <label>Password:</label>
      <input
        type="text"
        name="Password"
        value={passwordData}
        onChange={(p) => setPasswordData(p.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
