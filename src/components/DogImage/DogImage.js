import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

function DogImage({ breed }) {
  
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setDogImageUrl(data.message);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error fetching dog image:", error);
      setIsLoading(false);
    }
  }, [breed]);

  return (
    <>
      {isLoading ? (
        <div className="text-4xl pt-6 text-sky-600 flex items-center justify-center ">
          <FaSpinner className="animate-spin mr-2" />
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-4 border-2 border-sky-200 bg-white rounded-xl shadow-md">
          {dogImageUrl && (
            <img
              src={dogImageUrl}
              alt={`A ${breed}`}
              className="w-full h-80 object-fill rounded-xl"
            />
          )}
          <div className="px-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800 capitalize">
              {breed}
            </h2>
          </div>
        </div>
      )}
    </>
  );
}

export default DogImage;
