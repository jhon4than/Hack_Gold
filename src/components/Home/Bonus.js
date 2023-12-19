import React from "react";
import "./Bonus.css"; // Este é o arquivo CSS onde você vai definir todos os seus estilos
import imgbonus from "../../assets/cadastro.jpeg";
import HeaderLogo from "../Home/headerLogo";
import {
  FaTelegramPlane,
  FaRegListAlt,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa"; // Importando ícones específicos

const Bonus = () => {
  return (
    <div className="bonus-page">
      <div className="bonus-content">
        <HeaderLogo />

        <div className="bonus-image">
          <img src={imgbonus} alt="Bônus" />
        </div>

        <div className="bonus-buttons">
          <button
            onClick={() =>
              window.open(
                "https://chat.whatsapp.com/E3cOQghtTQ70St511afvFn",
                "_blank"
              )
            }
          >
            <FaWhatsapp /> Entrar Na Comunidade WhatsApp
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.betfive.io/register?id=657bac5398c6f000299a6d6c",
                "_blank"
              )
            }
          >
            <FaRegListAlt /> Cadastre-se na Plataforma
          </button>
          <button
            onClick={() =>
              window.open(`${process.env.PUBLIC_URL}/gerenciamento.pdf`)
            }
          >
            <FaDownload /> Baixar PDF de Bônus
          </button>
          <button
            onClick={() =>
              window.open("https://www.jhonmeireles.com.br/", "_blank")
            }
          >
            Site desenvolvido por Jhon Dev
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
