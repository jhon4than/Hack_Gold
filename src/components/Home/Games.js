import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Games.css"; // Importe seu arquivo CSS
// Importando imagens
import cardsImg from "../../imgs/cards.jpeg";
import minesImg from "../../imgs/mines.jpeg";
import fortuneImg from "../../imgs/fortune.jpg";
import bacImg from "../../imgs/bacbo.jpg";
import aviatorImg from "../../imgs/aviator.jpeg";
import mouseimg from "../../imgs/mouse.jpg";
import fortuneoximg from "../../imgs/fortune-ox.jpg";
import rabbitimg from "../../imgs/fortunerabbit.jpeg";
import dragontigerimg from "../../imgs/dragontiger.jpeg";
import backgroundImg from "../../assets/img03.png";
import HeaderLogo from "../Home/headerLogo";
import rouletImg from "../../imgs/MegaRoulet.jpg";
import spacemanImg from "../../imgs/spaceman.png";

import { FaDice, FaChess, FaBurn } from "react-icons/fa";
import { CgGames } from "react-icons/cg";

const getRandomPayout = (min, max, rarelyMin, rarelyMax) => {
  // Gera um número aleatório e verifica se ele cairá no caso raro
  if (Math.random() < 0.05) {
    // 5% de chance de cair no caso raro
    return (Math.random() * (rarelyMax - rarelyMin) + rarelyMin).toFixed(2);
  }
  // Caso contrário, retorna um valor dentro do intervalo normal
  return (Math.random() * (max - min) + min).toFixed(2);
};

function Games() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [payouts, setPayouts] = useState({
    "Football-studio": 95.0,
    MegaRoulet: 92.9,
    Mines: 97.28,
    Tiger: 92.08,
    Mouse: 98.23,
    FortuneOx: 93.51,
    Rabbit: 98.52,
    Spaceman: 96.12,
    Aviator: 95.98,
  });

  const updatePayouts = () => {
    setPayouts((prevPayouts) => {
      const updatedPayouts = { ...prevPayouts };
      Object.keys(updatedPayouts).forEach((game) => {
        // Check if the game is available
        const isAvailable = gamesList.find((g) => g.name === game)?.available;
        if (isAvailable) {
          // Randomly decide if we should update the payout for this game
          if (Math.random() < 0.95) {
            // Mostly stay within 89 - 99 range
            updatedPayouts[game] = (Math.random() * 10 + 89).toFixed(2);
          } else {
            // Rarely drop to 55 - 60 range
            updatedPayouts[game] = (Math.random() * 5 + 55).toFixed(2);
          }
        } else {
          // If the game is not available, set payout to 0%
          updatedPayouts[game] = "0.00";
        }
      });
      return updatedPayouts;
    });
  };

  // Effect to update payouts every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      updatePayouts();
    }, 60000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClick = (gameName) => {
    switch (gameName) {
      case "Football-studio":
        navigate("/games/football-studio");
        break;
      case "Mines":
        navigate("/games/mines");
        break;
      case "Tiger":
        navigate("/games/tiger");
        break;
      case "Mouse":
        navigate("/games/mouse");
        break;
      case "FortuneOx":
        navigate("/games/fortuneox");
        break;
      case "MegaRoulet":
        navigate("/games/megaroulet");
        break;
      case "Rabbit":
        navigate("/games/rabbit");
        break;
      case "Aviator":
        navigate("/games/aviator");
        break;
      case "Spaceman":
        navigate("/games/spaceman");
        break;
      // Adicione outros jogos aqui conforme necessário...
      default:
        console.warn("No route found for:", gameName);
    }
  };

  const gamesList = [
    {
      name: "Football-studio",
      img: cardsImg,
      category: "Cassino",
      payout: "95.32%",
      available: true,
    },
    {
      name: "MegaRoulet",
      img: rouletImg,
      category: "Cassino",
      payout: "96.50%",
      available: true,
    },
    {
      name: "Mines",
      img: minesImg,
      category: "Crash",
      payout: "97.00%",
      available: true,
    },
    {
      name: "Tiger",
      img: fortuneImg,
      category: "Slots",
      payout: "95.75%",
      available: true,
    },
    {
      name: "Mouse",
      img: mouseimg,
      category: "Slots",
      payout: "94.60%",
      available: true,
    },
    {
      name: "FortuneOx",
      img: fortuneoximg,
      category: "Slots",
      payout: "93.80%",
      available: true,
    },
    {
      name: "Rabbit",
      img: rabbitimg,
      category: "Slots",
      payout: "92.50%",
      available: true,
    },
    {
      name: "Aviator",
      img: aviatorImg,
      category: "Slots",
      payout: "98.20%",
      available: true,
    },
    {
      name: "Spaceman",
      img: spacemanImg,
      category: "Slots",
      payout: "99.40%",
      available: true,
    },
    // { name: "Football-studio", img: cardsImg, available: true },
    // { name: "MegaRoulet", img: rouletImg, available: true },
    // { name: "Mines", img: minesImg, available: true },
    // { name: "Tiger", img: fortuneImg, available: true },
    // { name: "Mouse", img: mouseimg, available: true },
    // { name: "FortuneOx", img: fortuneoximg, available: true },
    // { name: "Rabbit", img: rabbitimg, available: false },
    // { name: "DragonTiger", img: dragontigerimg, available: false },
    // { name: "Aviator", img: aviatorImg, available: false },
  ];
  const categories = [
    { name: "Todos", icon: <CgGames /> },
    { name: "Crash", icon: <FaDice /> },
    { name: "Cassino", icon: <FaChess /> },
    { name: "Slots", icon: <FaBurn /> },
  ];

  return (
    <div className="games-background">
      <HeaderLogo />
      {/* Categorias */}
      <div className="categories-container">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-button ${
              selectedCategory === category.name ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Título */}
      <h2 className="games-available-title">Games Disponíveis para Hackear:</h2>

      {/* Grid de Jogos */}
      <div className="games-grid">
        {gamesList
          .filter(
            (game) =>
              selectedCategory === "Todos" || game.category === selectedCategory
          )
          .map((game, index) => (
            <div
              key={index}
              className={`game-card ${!game.available && "disabled"}`}
            >
              <div className="game-header">{payouts[game.name]}% Vitória</div>
              <div className="game-card-content">
                <img src={game.img} className="game-img" alt={game.name} />
                {game.available ? (
                  <button
                    className="enter-game-button"
                    onClick={() => handleClick(game.name)}
                  >
                  ENTRAR_
                  </button>
                ) : (
                  <div className="coming-soon-overlay">
                    <span className="coming-soon-text">Em Breve</span>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Games;
