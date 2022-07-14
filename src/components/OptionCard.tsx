import { MouseEvent, useState } from "react";
import { options } from "../options";

export const OptionCard: React.FC = () => {
  const [option, setOption] = useState<any>(options[0]);
  const [value, setValue] = useState<number>(0);

  const handleRange: Function = (e: MouseEvent): void => {
    value < 20 && setOption(options[0]);
    value > 20 && setOption(options[1]);
    value > 40 && setOption(options[2]);
    value > 60 && setOption(options[3]);
    value > 80 && setOption(options[4]);
  };

  return (
    <div className="card-cont">
      <div className="price-pageviews">
        <p className="pageviews">{option.pageviews} PAGEVIEWS</p>
        <div className="price-month">
          <h2 className="usd-price">${option.price}/</h2>
          <p>month</p>
        </div>
      </div>
      <div className="pointer-cont">
        <input
          type="range"
          className="options"
          onChange={(e) => {
            setValue(e.target.valueAsNumber);
            handleRange();
          }}
        />
      </div>
    </div>
  );
};
