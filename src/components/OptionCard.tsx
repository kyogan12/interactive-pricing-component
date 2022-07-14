import { useState } from "react";
import { options } from "../options";

export const OptionCard: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const option = options[value < 10 ? 0 : Math.ceil(value / 25)];

  return (
    <div className="card-cont">
      <div className="price-pageviews">
        <p className="pageviews">{option.pageviews} PAGEVIEWS</p>
        <div className="price-month">
          <h2 className="usd-price">${option.price}</h2>
          <p className="month">/ month</p>
        </div>
      </div>
      <div className="pointer-cont">
        <input
          type="range"
          className="options"
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
          min="0"
          max="100"
        />
      </div>
    </div>
  );
};
