import { BrowserRouter, Routes, Route} from "react-router-dom";
import { LandingPage, TechnicalPage } from "./Pages/index.js"

function App() {
  return (
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route index path="/" element={<LandingPage />} />
      <Route index path="/Technical-page" element={<TechnicalPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
