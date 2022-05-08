import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { List } from "./components/List";
import { ListCreate } from "./components/ListCreate";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/listing/:id">List</Link>
      <Link to="/listing/create">Create List</Link>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listing/:id" element={<List />}></Route>
        <Route path="/listing/create" element={<ListCreate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
