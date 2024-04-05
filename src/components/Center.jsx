import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Center = (props) => {
  const { selectCity } = useContext(GlobalContext);

  return (
    <div className="flex justify-center items-center h-full">
      {props.isLoading ? (
        <div className="text-white">Yükleniyor...</div>
      ) : (
        <div className="bg-opacity-75 bg-gray-900 w-2/5 h-72 rounded-lg shadow-md flex flex-col lg:flex-row items-center text-center">
          <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={`icons/${props.data[0].status}.svg`}
              alt="My Icon"
              className="h-24 w-24 flex" // İkonun boyutunu buradan ayarlayabilirsiniz
            />
          </div>
          <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col justify-center items-center text-center">
            <div className="flex text-white text-2xl font-bold my-2">
              {selectCity}
            </div>
            <div className="flex text-white">{props.data[0].degree} C°</div>
            <div className="flex text-white">{props.data[0].status}</div>
            <div className="flex text-white">{props.data[0].day}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Center;
