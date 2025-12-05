import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { AppRouter } from "./Routes/AppRouter";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
