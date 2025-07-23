import reactLogo from './assets/react.svg';
import viteLogo from '../../../../../vite.svg';
import './App.css';
import {
  RegistrationFormUncontrolled,
  RegistrationFormControlled,
  UserForm,
} from './Forms';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Uncontrolled:</h2>
      <RegistrationFormUncontrolled />
      <h2>Controlled:</h2>
      <RegistrationFormControlled />
      <h2>Create User</h2>
      <UserForm />
      <h2>Edit User</h2>
      <UserForm user={{ username: 'Bob', password: 'Saget' }} />
    </>
  );
}

export default App;
