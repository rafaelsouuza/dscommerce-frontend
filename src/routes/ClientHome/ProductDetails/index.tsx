import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ButtonInverse } from "../../../components/ButtonInverse";
import { ButtonPrimary } from "../../../components/ButtonPrimary";
import { ProductDetailsCard } from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";
import "./styles.css";

export const ProductDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${params.productId}`)
      .then((response) => {
        setProduct((prev) => (prev = response.data));
      });

    // const prod = productService.findById(Number(params.productId));
    // setProduct((prev) => (prev = prod));
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
