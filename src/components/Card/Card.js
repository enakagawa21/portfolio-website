import "./Card.css";
import { cardData } from "./CardData";

function Card() {
  return (
    <div className='card-wrapper'>
      {cardData.map((item) => (
        <div className='card-container'>
          <div className='card'>
            <figure className='front'>
              <img src={item.linkImg} />
              <h1>{item.frontTitle}</h1>
            </figure>
            <figure className='back'>
              <img src={item.linkImgBack} />
              <h2>{item.backTitle}</h2>
              <p>{item.description}</p>
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
