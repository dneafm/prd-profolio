/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Experiments } from "./pages/Experiments";
import { ExperimentDetail } from "./pages/ExperimentDetail";
import { Notes } from "./pages/Notes";
import { NoteDetail } from "./pages/NoteDetail";
import { CV } from "./pages/CV";
import { Contact } from "./pages/Contact";
import { ProductFocus } from "./pages/ProductFocus";
import { ThemeProvider } from "./context/ThemeContext";

const isDjTradeSubdomain = import.meta.env.VITE_SITE_MODE === "djtrade";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {isDjTradeSubdomain ? (
          <Routes>
            <Route path="*" element={<ExperimentDetail forcedId="dj-trade" standalone />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ProductFocus />} />
              <Route path="product-focus" element={<Navigate to="/" replace />} />
              <Route path="main-portfolio" element={<Home />} />
              <Route path="operator-lab" element={<Experiments />} />
              <Route path="operator-lab/:id" element={<ExperimentDetail />} />
              <Route path="experiments" element={<Navigate to="/operator-lab" replace />} />
              <Route path="experiments/:id" element={<Navigate to="/operator-lab" replace />} />
              <Route path="notes" element={<Notes />} />
              <Route path="notes/:id" element={<NoteDetail />} />
              <Route path="cv" element={<CV />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}
