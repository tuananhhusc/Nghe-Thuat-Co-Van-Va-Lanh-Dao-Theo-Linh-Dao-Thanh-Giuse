"use client";

import { useState } from "react";
import { Maximize, Minimize } from "lucide-react";

export default function ZenModeToggle() {
  const [isZenMode, setIsZenMode] = useState(false);

  const toggleZenMode = () => {
    setIsZenMode(!isZenMode);
    document.body.classList.toggle("zen-mode");
  };

  return (
    <button
      onClick={toggleZenMode}
      className={`fixed top-6 right-20 z-50 p-2 rounded-full border border-gold/30 text-gold transition-colors 
        ${isZenMode ? "bg-navy-light shadow-lg" : "hover:bg-gold/10"}`}
      aria-label="Toggle Zen Mode"
      title="Chế độ tập trung"
    >
      {isZenMode ? <Minimize size={20} /> : <Maximize size={20} />}
    </button>
  );
}
