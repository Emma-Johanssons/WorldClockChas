import Clock from "./Clock";

function App() {
  return (
    <div>
      <nav>
        <h1>World Time</h1>
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className="p-8">
        <Clock city="Paris" time="Europe/Paris" />
        <Clock city="Stockholm" time="Europe/Stockholm" />
      </main>
    </div>
  );
}

export default App;
