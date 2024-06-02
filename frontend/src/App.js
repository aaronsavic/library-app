import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList></BookList>}></Route>
        <Route path="add" element={<AddBook></AddBook>}></Route>
        <Route path="edit/:id" element={<EditBook></EditBook>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
