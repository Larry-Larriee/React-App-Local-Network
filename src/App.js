import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Use <span className="italics">ipconfig</span> on Windows powershell to get your Wireless LAN adapter Wi-Fi (IPv4).</p>
        <a
          className="App-link"
          href="https://github.com/Larry-Larriee/React-App-On-Network"

          // New page & Prevents middleman injections from taking place
          target="_blank"
          rel="noopener noreferrer"
        >
          See README.md
        </a>
      </header>
    </div>
  );
}

export default App;
