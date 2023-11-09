import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "./Login.css";
import LogoMain from "../../assets/logoHome-remo.png";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCfaNmtgyo1VgqVFIHJ8vq-dekSJyjjk9c",
  authDomain: "login-app-a4816.firebaseapp.com",
  projectId: "login-app-a4816",
  storageBucket: "login-app-a4816.appspot.com",
  messagingSenderId: "653367042131",
  appId: "1:653367042131:web:95be958a59dde1477c26a6",
  measurementId: "G-J0SB1FB8LS",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Login() {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const saveUser = async (email, whatsapp) => {
    try {
      const docRef = await addDoc(collection(db, "contents"), {
        desc: email,
        name: whatsapp,
      });
      console.log("Documento escrito com ID: ", docRef.id);
    } catch (error) {
      console.error("Erro ao adicionar documento: ", error);
      setErrorMessage("Erro ao salvar os dados.");
    }
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userWhatsapp", whatsapp);
    navigate("/"); // substitua '/home' pelo caminho da sua tela inicial
  };

  const handleLogin = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Por favor, insira um email válido.");
      return;
    }
    if (!whatsapp || !/^\d{9,}$/.test(whatsapp)) {
      setErrorMessage(
        "Por favor, insira um número de WhatsApp válido (ex. 689854566597)."
      );
      return;
    }
    saveUser(email, whatsapp);
  };

  return (
    <div className="login-container">
      <img src={LogoMain} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1 className="login-title">Login</h1>
        <input
          type="text"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número de WhatsApp"
          className="login-input"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Entrar
        </button>
        {errorMessage && <p className="login-error">{errorMessage}</p>}
      </div>
      <footer className="login-footer">
        Desenvolvido por{" "}
        <a
          href="https://seu-site.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          JhonDev
        </a>
      </footer>
    </div>
  );
}

export default Login;
