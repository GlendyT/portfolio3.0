import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-black via-purple-900 to-pink-900 dark:from-gray-900 dark:via-blue-900 dark:to-green-900 ">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
