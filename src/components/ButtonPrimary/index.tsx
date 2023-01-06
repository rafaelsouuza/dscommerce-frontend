import "./styles.css";

type Props = {
  name: string;
};

export const ButtonPrimary = ({ name }: Props) => {
  return <div className="dsc-btn dsc-btn-blue">{name}</div>;
};
