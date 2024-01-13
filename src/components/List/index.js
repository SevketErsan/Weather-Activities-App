import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "Weather is awesome! Go outside and:"
          : "Bad weather outside! Here`s what you can do now:"}
      </h2>
      <ul className="list">
        {activities.map((activity) => (
          <li className="list_item" key={activity.id}>
            {activity.name}
            <button
              type="button"
              className="delete_button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              X
            </button>
          </li>
        ))}
        {/* {activities.map((activity) => {
        return (
          <li key={activity.id} className="list_item">
            {activity.name}
          </li>
        );
      })} */}
      </ul>
    </>
  );
}
