import "./style.scss";
export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MKS</h1>
        <p>Sistemas</p>
      </div>
      {/* TODO: Transformar em botao quando for criar o checkout */}
      <div className="cart">
        <img src="./cart.svg" alt="" />0
      </div>
    </header>
  );
};
