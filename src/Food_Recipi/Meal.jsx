import { useEffect, useState } from "react";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("indian");

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data.meals);
      setMealData(data.meals);
    };
    fetchDataFromAPI();
  }, [area]);

  return (
    <>
      <div className="mx-auto text-center mb-4">
        <button
          onClick={() => setArea("indian")}
          type="button"
          className="btn btn-outline-primary mx-2"
        >
          Indian
        </button>
        <button
          onClick={() => setArea("Canadian")}
          type="button"
          className="btn btn-outline-primary  mx-2"
        >
          Canadian
        </button>
        <button
          onClick={() => setArea("American")}
          type="button"
          className="btn btn-outline-success mx-2"
        >
          American
        </button>
        <button
          onClick={() => setArea("Thai")}
          type="button"
          className="btn btn-outline-info mx-2"
        >
          Thai
        </button>
        <button
          onClick={() => setArea("British")}
          type="button"
          className="btn btn-outline-warning mx-2"
        >
          British
        </button>
        <button
          onClick={() => setArea("Russian")}
          type="button"
          className="btn btn-outline-info mx-2"
        >
          Russian
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          justifyItems: "center",
        }}
      >
        {mealData.map((data) => (
          <div key={data.idMeal} className="meal-card">
            <div>
              <img
                src={data.strMealThumb}
                alt={data.strMeal}
                className="meal-image"
              />
            </div>
            <h5 className="meal-title">{data.strMeal}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
