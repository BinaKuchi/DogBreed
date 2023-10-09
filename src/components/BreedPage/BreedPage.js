import React, { useEffect, useState } from "react";
import BreedList from "../BreedList/BreedList";
import Loading from "../Layout/Loading";

function BreedPage() {

  const [breedListAll, setBreedListAll] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        const breedNames = Object.keys(data.message);
        setBreedListAll(breedNames);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="text-center p-6">
      <h1 className="text-black font-bold text-2xl">Dog Breeds List</h1>
      <BreedList breedList={breedListAll} />
    </div>
  );
}

export default BreedPage;
