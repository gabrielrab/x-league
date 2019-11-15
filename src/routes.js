import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Index from "./pages/Index";
import Campeonatos from "./pages/Campeonatos";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
      <Route path="/campeonatos" exact component={Campeonatos} />
    </BrowserRouter>
  );
}
