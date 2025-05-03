import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import {ProfilePage} from "./pages/ProfilePage";
import NotFoundPage from "./pages/InvalidPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path ="main" element = {<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
