import { Daum } from "../../interfaces";
import { container, displayName, image, description  } from "./styles";

const Card = ({ data }: { data: Daum }) => {
  return (
    <div className={container}>
      <div key={data.uuid}>
        <li className={displayName}>{data.displayName}</li>
        <img
          className={image}
          src={data.displayIcon}
          alt={data.displayName}
        />
        <li className={description}>{data.description}</li>
      </div>
    </div>
  );
};

export default Card;
