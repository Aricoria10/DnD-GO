import { Link } from "react-router-dom";

const Encounters = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {};

return (
  <div className="Game on button">
    <h2>Play!</h2>
    <button
      onClick={() => Play("Encounters")}
      className="list-group-item list-group-item-action">
      Start Encounter
    </button>
  </div>
);

export default Encounters;
