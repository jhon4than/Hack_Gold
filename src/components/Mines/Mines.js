import React, { useState, useEffect } from "react";
import "./Mines.css"; // Certifique-se de adicionar o caminho correto para o seu arquivo CSS
import { useNavigate } from "react-router-dom";
import { FaCircle, FaStar } from "react-icons/fa";
import HeaderLogo from "../Home/headerLogo";

function Mines() {
  const [countdown, setCountdown] = useState("00:00");
  const [isSinalHacked, setIsSinalHacked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [webUrl, setWebUrl] = useState(
    "https://afiliado.realsbet.com/visit/?bta=72567&brand=realsbet"
  );
  const [cards, setCards] = useState(Array(25).fill("circle"));
  const [isHacking, setIsHacking] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const generateBoard = () => {
    const mines = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    const estrela = Math.floor(Math.random() * (5 - 3 + 1)) + 3;

    const board = Array(25).fill("circle");

    // Adicionar estrelas
    for (let i = 0; i < estrela; i++) {
      let position;
      do {
        position = Math.floor(Math.random() * 25);
      } while (board[position] === "star");
      board[position] = "star";
    }

    return board;
  };

  const startCountdown = () => {
    let totalTime = 180;
    const intervalId = setInterval(() => {
      const minutes = String(Math.floor(totalTime / 60)).padStart(2, "0");
      const seconds = String(totalTime % 60).padStart(2, "0");

      setCountdown(`${minutes}:${seconds}`);
      totalTime--;

      if (totalTime < 0) {
        clearInterval(intervalId);
        setCountdown("00:00");
        setIsSinalHacked(false);
        setCards(Array(25).fill("circle"));
      }
    }, 1000);

    // Armazenar o ID do intervalo no estado
    setIntervalId(intervalId);
  };
  const handleHackClick = () => {
    setIsLoading(true);
    setIsHacking(true);
    setTimeout(() => {
      setCards(generateBoard());
      setIsSinalHacked(true);
      setIsHacking(false);
      setIsLoading(false);
      startCountdown();
    }, 5000);
  };

  const renderCard = (card, index) => {
    const cardClass = card === "star" ? "star" : "circle";
    const IconComponent = card === "star" ? FaStar : FaCircle;

    // Verificação de compatibilidade para dispositivos móveis
    if (
      typeof window !== "undefined" &&
      /Mobi|Android/i.test(window.navigator.userAgent)
    ) {
      // Renderização alternativa para dispositivos móveis
      return (
        <div key={index} className={`card ${cardClass}`}>
          {card === "star" ? "⭐" : "⚪"} {/* Ícones alternativos */}
        </div>
      );
    }

    return (
      <div key={index} className={`card ${cardClass}`}>
        <IconComponent
          color={card === "star" ? "#FFD700" : "#87CEEB"}
          size={30}
        />
      </div>
    );
  };

  // Renderização do componente
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${require("../../assets/img05.jpg")})` }}
    >
      <div className="container">
        <HeaderLogo />
        <img
          src={require("../../assets/logomines.png")}
          alt="Logo"
          className="mines-logo"
        />
        <div className="info-container">
          <div className="text-box">🎮: Tentativas: 3</div>
          <div className="text-box">💥: 3 minas</div>
          <div className="text-box">⏱: Válido por {countdown}</div>
        </div>
        <div className="cards-container">{cards.map(renderCard)}</div>
        <button
          className="hack-button"
          onClick={handleHackClick}
          disabled={isSinalHacked || isHacking}
        >
          {isHacking ? (
            <>
              Hackeando Sinal Aguarde...
              <span className="spinner-container">
                <div className="spinner"></div>
              </span>
            </>
          ) : isSinalHacked ? (
            "SINAL HACKEADO"
          ) : (
            "HACKEAR SINAL"
          )}
        </button>
        {/* Substitua WebView por iframe na web */}
        <iframe src={webUrl} title="Conteúdo Web" className="web-view" />
      </div>
    </div>
  );
}

export default Mines;
