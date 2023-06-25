import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HotelSearchPage from "./page/HotelSearchPage";
import HotelPage from "./page/HotelPage";
import FlightSearchPage from "./page/FlightSearchPage";
import HomePage from "./page/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage></HomePage>} />
        <Route path="/hotel" element={<HotelSearchPage></HotelSearchPage>} />
        <Route path="/hotel/:id" element={<HotelPage></HotelPage>} />
        <Route path="/flight" element={<FlightSearchPage></FlightSearchPage>} />
        <Route path="/*" element={<Navigate to="/homepage" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
