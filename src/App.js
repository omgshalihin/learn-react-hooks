import "./App.css";
import Counter from "./components/Counter";
import SyncAsyncCounter from "./components/SyncAsyncCounter";
import UserData from "./components/UserData";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <Counter />
      </div>
      <div>
        <h1>Sync & Async Counter</h1>
        <SyncAsyncCounter />
      </div>
      <div>
        <h1>User Data</h1>
        <UserData />
      </div>
    </div>
  );
}

export default App;
