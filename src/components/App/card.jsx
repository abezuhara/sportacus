import "./App.css";

const Card = ({
  lattitude,
  userLogo = "https://s0.rbk.ru/v6_top_pics/media/img/9/14/754979567615149.jpg",
}) => {
  return (
    <div className="card_container">
      <div className="arrow_back">
        <img src="https://www.shareicon.net/data/512x512/2015/09/29/648454_arrows_512x512.png" />
        <p>Go to the menu</p>
      </div>
      <div className="userlogo_contaner">
        <img src={userLogo} />
      </div>
      <div className="info_container">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" />
        <p>instagram link</p>
      </div>
      <div className="info_container">
        <img src="https://www.pngrepo.com/png/69593/512/location-pin.png" />
        <p>where is it</p>
      </div>
      <div className="info_container">
        <p>I am gonna tell you something about this event...</p>
      </div>
      <div className="card_reaction">
        <p>I am in!</p>
        <img src="https://www.clipartmax.com/png/middle/358-3583360_e-3-hearts-hearts-like-icon-instagram-heart-icon-svg.png"></img>
      </div>
    </div>
  );
};

export default Card;
