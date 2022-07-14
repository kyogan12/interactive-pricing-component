import { MouseEvent, useState } from "react";
import { options } from "../options";
import Draggable from "react-draggable";
import drag from "../images/icon-slider.svg";

export const OptionCard: React.FC = () => {
  const [option, setOption] = useState<any>(options[0]);
  const [offset, setOffset] = useState<number>(0);
  const [clientX, setClientX] = useState<number>(0);

  const handleDrag: Function = (e: MouseEvent): void => {
    setClientX(e.clientX);
    if (e.clientX > clientX) {
      setOffset(offset + 1.3);
      if (offset > 420) {
        setOffset(400);
      }
    } else {
      setOffset(offset - 1);
      if (offset < 1) {
        setOffset(0);
      }
    }
    offset < 80 && setOption(options[0]);
    offset > 90 && setOption(options[1]);
    offset > 160 && setOption(options[2]);
    offset > 240 && setOption(options[3]);
    offset > 350 && setOption(options[4]);
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
        <Draggable
          axis="x"
          onDrag={(e) => handleDrag(e)}
          bounds={{ left: 0, right: 420 }}
        >
          <div style={{ zIndex: "1" }} className="pointer">
            <img src={drag} className="drag-icons" alt="" />
          </div>
        </Draggable>
        <div className="options"></div>
      </div>
    </div>
  );
};
