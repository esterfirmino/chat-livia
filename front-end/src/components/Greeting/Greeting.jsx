import "./Greeting.css";
import LiviaLogo from "../../../public/liviaLogo.svg";

export default function Greeting() {
  return (
    <div className="greeting">
      {/* container da logo */}
      <div className="greeting-logo fade-in delay-1">
        <img src={LiviaLogo} alt="Logo da LivIA" className="greeting-logo-img" />
      </div>

      {/* container do texto */}
      <div className="greeting-text fade-in delay-2">
        <h1 className="title">Olá, tudo bem?</h1>
        {/* <p className="subtitle">Como posso te ajudar hoje?</p> */}
      </div>
    </div>
  );
}