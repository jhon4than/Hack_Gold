import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  useLocation,
} from "react-router-dom";
import { FaHome, FaDice, FaGift, FaArrowLeft } from "react-icons/fa";
import PrivateRoute from "./components/Home/PrivateRoute";
import "./App.css";
import FacebookPixel from "./FacebookPixel";

// Importe seus componentes da Web aqui
import Home from "./components/Home/Home";
import Games from "./components/Home/Games";
import MinesScreen from "./components/Mines/Mines";
import TigerScreen from "./components/Tiger/Tiger";
import FootballStudioScreen from "./components/FS/FootballStudio";
import BonusScreen from "./components/Home/Bonus";
import MouseScreen from "./components/Mouse/Mouse";
import FortuneOx from "./components/FortuneOx/FortuneOx";
import Login from "./components/Home/Login";

// As linhas dos componentes importados estão comentadas pois presumo que ainda não foram convertidos ou implementados.
import HeaderLogo from "./components/Home/headerLogo";

// Este componente renderiza a barra de navegação inferior
const BottomTabBar = () => {
  // Use o hook useLocation para determinar a rota ativa e aplicar estilos condicionalmente
  const location = useLocation();

  // Função para determinar se o link está ativo
  const getNavLinkClass = (path) => {
    return location.pathname === path ? "tab-item active" : "tab-item";
  };

  // Exiba o BottomTabBar apenas em rotas diferentes de "/login"
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className="bottom-tab-bar">
      <NavLink to="/" className={getNavLinkClass("/")}>
        <FaHome size={20} />
        <span>Inicio</span>
      </NavLink>
      <NavLink to="/games" className={getNavLinkClass("/games")}>
        <FaDice size={20} />
        <span>Jogos</span>
      </NavLink>
      <NavLink to="/bonus" className={getNavLinkClass("/bonus")}>
        <FaGift size={20} />
        <span>Bônus</span>
      </NavLink>
    </div>
  );
};

// Este componente renderiza o cabeçalho condicional
const Header = () => {
  const location = useLocation();

  return (
    <header>
      {location.pathname === "/" ? null : <HeaderLogo />}
      {location.pathname !== "/" && location.pathname !== "/bonus" && (
        <NavLink to="/games" className="back-button">
          <FaArrowLeft size={20} />
        </NavLink>
      )}
    </header>
  );
};

// Este é o componente de aplicativo principal
const App = () => {
  return (
    <>
      <FacebookPixel />
      <Router>
        <Routes>
          {" "}
          {/* Use Routes aqui */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/games"
            element={
              <PrivateRoute>
                <Games />
              </PrivateRoute>
            }
          />
          <Route
            path="/games/mines"
            element={
              <PrivateRoute>
                <MinesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/games/tiger"
            element={
              <PrivateRoute>
                <TigerScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/games/football-studio"
            element={
              <PrivateRoute>
                <FootballStudioScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/games/fortuneox"
            element={
              <PrivateRoute>
                <FortuneOx />
              </PrivateRoute>
            }
          />
          <Route
            path="/bonus"
            element={
              <PrivateRoute>
                <BonusScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/games/mouse"
            element={
              <PrivateRoute>
                <MouseScreen />
              </PrivateRoute>
            }
          />
        </Routes>
        <BottomTabBar />
      </Router>
    </>
  );
};

export default App;
