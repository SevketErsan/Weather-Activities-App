import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = event.target;
    const data = {
      name: formData.elements.name.value,
      isForGoodWeather: formData.elements.isForGoodWeather.checked,
    };
    onAddActivity(data);

    event.target.reset();
    formData.name.focus();
    console.log(data);

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    // // const entries = {
    // //   name: data.name.value,
    // //   isForGoodWeather: data.isForGoodWeather.checked,
    // // };
    // onAddActivity(data);

    // event.target.reset();
    // event.target.name.focus();
    // console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity:</h2>
      <div className="form_input">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Activity Name"
        ></input>
      </div>
      <div className="form_input">
        <label htmlFor="isForGoodWeather">Good-weather activity:</label>
        <input
          type="checkbox"
          name="isForGoodWeather"
          id="isForGoodWeather"
        ></input>
      </div>
      <button className="submit_button">Submit</button>
    </form>
  );
}
