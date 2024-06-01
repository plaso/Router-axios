import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const Card = ({ id, name, img, price, rating, ratingVotes, size, memory, processor, admitSD }) => {
  const renderFeature = (title, value) => {
    return (
      <div>
        <p className="fs-6 mb-0">{title}</p>
        <p className="fs-5 fw-semibold">{value}</p>
      </div>
    )
  }
  
  return (
    <div className="border border-secondary rounded p-4 col">
      <Link to={`/phones/${id}`} className="fw-bold text-decoration-none text-dark">{name}</Link>
      <div className="row row-cols-2 mt-3">
        <div className="d-flex flex-column">
          <img className="w-100" src={img} alt={name} />
          <div className="mt-3 d-flex justify-content-center">
            <Rating>{rating}</Rating>
            <p className="ms-2">{ratingVotes}</p>
          </div>
        </div>

        <div>
          {renderFeature('Tamaño de pantalla', `${size}"`)}
          {renderFeature('Capacidad', memory)}
          {renderFeature('Procesador', processor)}
          {renderFeature('Admite SD', admitSD ? 'Si' : 'No')}
          <p className="text-danger fw-semibold fs-2">{price} €</p>
        </div>
      </div>
      
    </div>
  )
}

export default Card;