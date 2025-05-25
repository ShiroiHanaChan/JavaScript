import './App.css'
import SayHello from "./components/SayHello.jsx";
import WindowSize from "./components/WindowSize.jsx";
import UsingLocalStorage from "./components/UsingLocalStorage.jsx";
import UserList from "./components/UserList.jsx";

function App() {

  return (
    <>
      <h1>useEffect Hook</h1>
        <hr/>
      <SayHello/>
      <WindowSize/>
        <UsingLocalStorage/>
        <UserList/>
    </>
  )
}

export default App
