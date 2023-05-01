import { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [toursList, setToursList] = useState([]);

  const getToursData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const toursData = await resp.json();
      // console.log(toursData);
      setToursList(toursData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getToursData();
  }, []);

  const deleteTours = (id) => {
    const updatedToursList = toursList.filter((tourObj) => id != tourObj.id);
    setToursList(updatedToursList);
  };

  if (toursList.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>

          <button
            type="button"
            className="btn"
            style={{ margin: "2rem" }}
            onClick={getToursData}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {isLoading && <Loading />}
      {!isLoading && (
        <Tours
          toursList={toursList}
          deleteTours={deleteTours}
          setIsLoading={setIsLoading}
        />
      )}
    </main>
  );
};
export default App;
