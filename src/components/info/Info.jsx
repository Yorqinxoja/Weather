import React from "react";
import { Container } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faSun } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

const Info = () => {
  const data = useSelector(state => state.searchData); 
  console.log(data);

  
  if (!data || !data.current || !data.forecast) {
    return <p>Loading...</p>; 
  }

  return (
    <Container>
      <div
        className="w-[460px] h-[196px] rounded-[30px] p-8 flex items-center justify-between"
        style={{ boxShadow: "0 4px 15px blueviolet" }}>
        <div className="text-left">
          <div className="flex gap-4 w-[150px] h-[76px] text-[blueviolet] text-[18px]">
            <FontAwesomeIcon className="text-[44px]" icon={faDroplet} />
            <p className="text-black text-[18px]">
              Humidity {data.current.humidity}%
            </p>
          </div>
          <div className="flex gap-4 w-[150px] h-[66px] text-[blueviolet] text-[18px]">
            <FontAwesomeIcon className="text-[44px]" icon={faSun} />
            <p className="text-black text-[18px]">
              UV Index: {data.current.uv} out of 10
            </p>
          </div>
        </div>

        <div className="h-full w-[1px] bg-black mx-4"></div>

        <div className="text-right">
          <div className="flex gap-4 w-[150px] h-[76px] text-[blueviolet] text-[18px]">
            <FontAwesomeIcon className="text-[44px]" icon={faSun} />
            <p className="text-black text-[18px]">
              Sunrise {data.forecast.forecastday[0].astro.sunrise}
            </p>
          </div>
          <div className="flex gap-4 w-[150px] h-[66px] text-[blueviolet] text-[18px]">
            <FontAwesomeIcon className="text-[44px]" icon={faSun} />
            <p className="text-black text-[18px]">
              Sunset {data.forecast.forecastday[0].astro.sunset}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Info;
