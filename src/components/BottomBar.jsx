import React, { useContext, useEffect, useState } from "react";
import Center from "./Center";
import { GlobalContext } from "../context/GlobalState";

const BottomBar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectCity } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${selectCity}`,
          {
            method: "GET",
            headers: {
              authorization:
                "apikey 66ULBodlt6lcuLBeMiUaXh:5ijJff3VmVVBRongIx6G0W",
              "content-type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.result);
        const newData = await data.result.map((item) => {
          return { ...item, degree: parseInt(item.degree) };
        });
        setData(newData);
        setLoading(false);
      } catch (error) {
        console.error("Bir hata oluştu:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectCity]);

  return (
    <React.Fragment>
      <Center data={data} isLoading={loading} />
      {loading ? (
        <div className="w-full h-14 md:h-36 lg:h-52 bg-opacity-70 bg-gray-900 text-center flex flex-row justify-center">
          <p className="flex items-center text-white text-xl">
            Please wait, loading...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-x-0 w-full h-14 md:h-36 lg:h-52">
          {data.length !== 0 &&
            data.map((item, index) => (
              <div
                className="w-full h-fulls bg-opacity-70 bg-gray-900 border border-gray-500 hover:opacity-80 rounded-sm flex flex-col justify-center items-center"
                key={index}
              >
                <img
                  src={`icons/${item.status}.svg`}
                  alt="My Icon"
                  className="h-8 w-8 flex"
                />
                <div className="flex text-white">{item.degree} C°</div>
                <div className="flex text-white">{item.status}</div>
                <div className="flex text-white">{item.day}</div>
              </div>
            ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default BottomBar;
