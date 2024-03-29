// import logo from './logo.svg';
import "./App.css";
import emojipedia from "./emojipedia";
import Dictionary from "./Dictionary";

function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="container">
        <dl className="dictionary">
          {emojipedia.map((e) => {
            return (
              <Dictionary
                key={e.id}
                name={e.name}
                emoji={e.emoji}
                meaning={e.meaning}
              />
            );
          })}
        </dl>
      </div>
    </>
  );
}

export default App;
