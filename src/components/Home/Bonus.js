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
                "https://api.whatsapp.com/send?phone=5569992732549&text=Estou%20precisando%20de%20suporte%20pode%20me%20ajudar",
                "_blank"
              )
            }
          >
            <FaWhatsapp /> Entrar Na Comunidade WhatsApp
          </button>
          <button
            onClick={() =>
              window.open(
                "https://afiliados.mmabet.com/visit/?bta=38874&nci=5343",
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
        </div>
      </div>
    </div>
  );
};

export default Bonus;
