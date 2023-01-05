import "./styles.css";

type Props = {
  name: string;
};

export const ProductCategory = ({ name }: Props) => {
  return <div className="dsc-category">{name}</div>;
};
