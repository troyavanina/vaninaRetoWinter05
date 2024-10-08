import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [wellcome, setWellcome] = useState("");

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    console.log("ouch" + setUser);
    if (user === "vanina" && password === "pepeloco") {
      console.log("usuario correcto");
      setWellcome("Gracias por estar de regreso");
    } else {
      setWellcome("Usuario o contraseña incorrectos");
      console.log("usuario incorrecto");
    }
  };

  return (
    <div>
      <header>
        <div className="divHeader">
          <svg
            className="smileEmoji"
            fill="currentColor"
            height="40"
            viewBox="0 0 16 16"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z"></path>
          </svg>
          <h2 className="h2Header">Haceme acordar!</h2>
        </div>
      </header>
      <section className="sectionMain">
        <h2 className="h2Wellcome">¡Hola! {user}</h2>
        <div className="divLogIn">
          <div className="divUser">
            <label htmlFor="user"></label>
            <input
              type="text"
              id="user"
              className="user"
              placeholder="usuario/a"
              value={user}
              onChange={handleChangeUser}
            />
          </div>
          <div className="divPassword">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              className="password"
              placeholder="contraseña"
              value={password}
              onChange={handleChangePass}
            />
          </div>
        </div>
        <div className="divButton">
          <button className="buttonEnter" onClick={handleClick}>
            INGRESAR
          </button>
        </div>
        <div className="divWellcome">
          <p className="pWellcome" id="pWellcome">
            {wellcome}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
