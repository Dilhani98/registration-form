// src/App.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setName,
  setEmail,
  setPassword,
  setLoading,
} from './store/reducers';
import { RootState, AppDispatch } from './store';

function App() {
  const { name, email, password, loading, error } = useSelector(
    (state: RootState) => state
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation can be added here before dispatching the action

    dispatch({ type: 'registration/startRegistration' });
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default App;
