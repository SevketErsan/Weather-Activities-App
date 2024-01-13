import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/index";
import List from "./components/List/index";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState();

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          alert("API not found!");
          console.log("404! API not found!");
        }
      } catch (error) {
        alert(Error);
      }
    }
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [setWeather]);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather?.isGoodWeather
  );
  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }
  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }
  return (
    <div className="App">
      <h1 className="App_heading">
        <span>{weather?.condition}</span> <span>{weather?.temperature}</span>
      </h1>
      <List
        activities={filteredActivities}
        isGoodWeather={weather?.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
