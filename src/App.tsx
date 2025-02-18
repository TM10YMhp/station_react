import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { PlaylistId } from "./pages/playlist_id";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="playlist/:id" element={<PlaylistId />} />
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
}
