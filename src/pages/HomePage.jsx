import { useEffect, useState } from 'react';
import '../components/universal.css';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('homepage-body');
    // Load saved name from localStorage
    const savedName = localStorage.getItem('username');
    if (savedName) {
      setName(savedName);
    }
    return () => {
      document.body.classList.remove('homepage-body');
    };
  }, []);

  const handleEnter = () => {
    const trimmedName = name.trim();

    if (trimmedName.length > 9) {
      setError('Invalid username: Fewer characters required');
      return;
    }

    setError('');
    // Save name to localStorage
    localStorage.setItem('username', trimmedName);

    navigate('/main', { state: { name: trimmedName } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEnter();
    }
  };

  return (
    <>
      <title>Shat</title>
      <link rel="icon" type="image/svg+xml" href="/y2k-favicon.svg" />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
          <input
            type="text"
            placeholder="Username"
            className="search-bar"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleEnter} className="enter-button">
            <span className="button-text">ENTER</span>
          </button>
        </div>
        {error && (
          <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
            {error}
          </div>
        )}
      </div>
    </>
  );
}
