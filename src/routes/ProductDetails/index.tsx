import { ButtonInverse } from "../../components/ButtonInverse";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ProductDetailsCard } from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";
import "./styles.css";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Esta Tv é muito bonita",
  imgUrl:
    "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 2,
      name: "Computadores",
    },
  ],
};

export const ProductDetails = () => {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={product} />
        <div className="dsc-btn-page-container">
          <ButtonPrimary name="Comprar" />
          <ButtonInverse name="Início" />
        </div>
      </section>
    </main>
  );
};
