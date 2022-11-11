import React from "react";
import { useRoutes } from "react-router-dom";
import Homepage from "/src/page/homepage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
  ]);
}
