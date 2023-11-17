import "./style.scss";
import { Product } from "@/types";

export const Card = ({ product }: { product: Product }) => {
  return (
    <div className="card">
      <img className="card-image" src={product.photo} alt={product.name} />
      <div className="content">
        <div className="title-price-container">
          <h2 className="title">{product.name}</h2>
          <div className="price">R${Math.trunc(Number(product.price))}</div>
        </div>

        <p className="description">{product.description}</p>
      </div>
      <button className="buy-button">
        <img src="./shopping-bag.svg" alt="shopping bag icon" />
        <p>COMPRAR</p>
      </button>
    </div>
  );
};
