import React from "react";
import { Button } from "./components/Button";
import { ShowButtons } from "./components/ShowButtons";
import { Sidebar } from "./ui/Sidebar";
import "./ui/ui.css";

export const ButtonApp = () => {
  return (
    <div className="content">
      <Sidebar />
      <ShowButtons />
    </div>
  );
};
