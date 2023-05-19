import { BrowserRouter, Routes, Route} from "react-router-dom";
import { LandingPage, TechnicalPage } from "./Pages/index.js"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';





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
