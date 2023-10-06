const RestaurantCard = ({ resData } = props) => {
  const { name, image, rating, cuisine, cfo } = resData.info;
  const { deliveryTime } = resData.order;

  return (
    <div className="res-card">
      <img src={image.url} />
      <h3>{name}</h3>
      <p>{cuisine[0].name}</p>
      <p>{rating.aggregate_rating} Star</p>
      <p>{cfo.text}</p>
      <p>{deliveryTime}</p>
    </div>
  );
};

export default RestaurantCard;
