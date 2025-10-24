import "./SearchBar.css";
import ArrowClaro from "../../assets/arrowClaro.svg";
import ArrowEscuro from "../../assets/arrowEscuro.svg";
import React, { useState, useEffect, useRef } from "react";

export default function SearchBar({ input, setInput, handleSend, isLoading }) {
  const [isHovered, setIsHovered] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search-input"
        placeholder="Como posso ajudar você hoje?"
        aria-label="Como posso ajudar você hoje?"
      />

      <button
        className="search-btn"
        aria-label="Enviar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? ArrowEscuro : ArrowClaro}
          alt="Enviar"
          className="search-icon"
        />
      </button>
    </form>
  );
}