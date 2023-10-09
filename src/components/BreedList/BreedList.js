import { useState } from "react";
import DogImage from "../DogImage/DogImage";

function BreedList({ breedList }) {

  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState("");

  const handleItemClick = (index, breed) => {
    setActiveIndex(index);
    setSelectedBreed(breed);
  };
  
  return (
    <div className="text-center">
      <ul className="flex flex-wrap justify-center  border-b-2">
        {breedList.map((breed, index) => (
          <li
            key={index}
            className={`cursor-pointer capitalize mx-2 my-2 ${
              activeIndex === index ? "text-blue-500 font-bold" : "font-normal"
            }`}
            onClick={() => handleItemClick(index, breed)}
          >
            {breed}
          </li>
        ))}
      </ul>
      {selectedBreed ? (
        <DogImage breed={selectedBreed} />
      ) : (
        <>
          <div className="p-4">
            <p className="text-red-600">
              Select a breed to see the random dog image.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default BreedList;
