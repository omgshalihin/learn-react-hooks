import "./App.css";
import Counter from "./useState/Counter";
import SyncAsyncCounter from "./useState/SyncAsyncCounter";
import UserData from "./useState/UserData";
import SingleOnChange from "./useState/SingleOnChange";
import Basic from "./useEffect/Basic";
import AutoCounter from "./useEffect/AutoCounter";

function App() {
  return (
    <div className="App">
      <span>-------useState-------</span>
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
      <div>
        <h1>Update form with one onChange</h1>
        <SingleOnChange />
      </div>
      <span>-------useEffect-------</span>
      <div>
        <h1>Basic counter</h1>
        <Basic />
      </div>
      <div>
        <h1>AutoCounter</h1>
        <AutoCounter />
      </div>
    </div>
  );
}

export default App;
