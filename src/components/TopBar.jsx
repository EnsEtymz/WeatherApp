import { useContext, useEffect, useState } from "react";
import cities from "../data/iller.json";
import { GlobalContext } from "../context/GlobalState";

const TopBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { selectCity, setSelectCity } = useContext(GlobalContext);
  const [filteredCities, setFilteredCities] = useState([]);
  const [show, setShow] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setFilteredCities(
      cities.filter((item) =>
        item.il_adi.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    if (
      filteredCities.length == 0 ||
      filteredCities.length == 81 ||
      filteredCities[0].il_adi == selectCity
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [filteredCities]);

  return (
    <div className="w-full h-20 bg-opacity-50 bg-gray-800 flex flex-row justify-between">
      <div className="flex font-bold items-center h-full px-4 text-white text-2xl">
        Weather App
      </div>
      <div className="relative flex items-center justify-center px-4">
        <form className="max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img
                src={`icons/Clear.svg`}
                alt="My Icon"
                className="h-4 w-4 flex"
              />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 ps-10 text-sm rounded-lg bg-gray-700 text-gray-400"
              placeholder="Search Location"
              value={searchTerm}
              onChange={handleSearch}
              required
            />
            {show && (
              <div
                id="dropdown"
                className="absolute overflow-y-auto max-h-48 top-[100%] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  {filteredCities.map((item, index) => (
                    <li key={index}>
                      <button
                        value={selectCity}
                        onClick={() => {
                          setSelectCity(item.il_adi);
                          setSearchTerm(item.il_adi);
                          setShow(false);
                        }}
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item.il_adi}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopBar;
