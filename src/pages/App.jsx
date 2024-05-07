import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "@/pages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<>NOT FOUND</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
