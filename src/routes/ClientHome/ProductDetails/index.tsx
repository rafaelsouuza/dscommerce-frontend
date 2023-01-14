import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ButtonInverse } from "../../../components/ButtonInverse";
import { ButtonPrimary } from "../../../components/ButtonPrimary";
import { ProductDetailsCard } from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";
import "./styles.css";

export const ProductDetails = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        setProduct((prev) => (prev = response.data));
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}

        <div className="dsc-btn-page-container">
          <ButtonPrimary name="Comprar" />
          <Link to={"/"}>
            <ButtonInverse name="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
};
