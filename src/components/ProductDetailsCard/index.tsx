import { ProductDTO } from "../../models/product";
import { ProductCategory } from "../ProductCategory";
import "./styles.css";

type Props = {
  product: ProductDTO;
};

export const ProductDetailsCard = ({ product }: Props) => {
  return (
    <div className="dsc-card dsc-mb20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="dsc-product-details-bottom">
        <h3>R$ {product.price.toFixed(2)}</h3>
        <h4>{product.name}</h4>
        <p>{product.description}</p>

        <div className="dsc-category-container">
          {product.categories.map((category) => (
            <ProductCategory key={category.id} name={category.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
