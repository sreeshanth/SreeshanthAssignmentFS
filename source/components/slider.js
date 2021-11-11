import React, {
    Component,
    memo,
    useCallback,
    useState,
    useEffect,
    useMemo
  } from "react";
  
  const RangeSlider = memo(
    ({ classes, label, onChange, value, ...sliderProps }) => {
      const [sliderVal, setSliderVal] = useState(0);
      const [mouseState, setMouseState] = useState(null);
  
      useEffect(() => {
        setSliderVal(value);
      }, [value]);
  
      const changeCallback = e => {
        setSliderVal(e.target.value);
      };
  
      useEffect(() => {
        if (mouseState === "up") {
          onChange(sliderVal);
        }
      }, [mouseState]);
      return (
        <div className="range-slider" style={{marginLeft:"150px"}} >
          <h2>Select people from range $1000 - $4000</h2>
          <h3>value: $1000 - ${sliderVal}</h3>
          <input
            type="range"
            value={sliderVal}
            {...sliderProps}
            className={`slider ${classes}`}
            id="myRange"
            onChange={changeCallback}
            onMouseDown={() => setMouseState("down")}
            onMouseUp={() => setMouseState("up")}
          />
        </div>
      );
    }
  );
  
  export default RangeSlider;
  
    //   const Slider = () => {
    //     const [parentVal, setParentVal] = useState(10);
  
    //     const sliderValueChanged = useCallback(val => {
    //       console.log("NEW VALUE", val);
    //       setParentVal(val);
    //     });
  
    //     const sliderProps = useMemo(
    //       () => ({
    //         min: 0,
    //         max: 100,
    //         value: parentVal,
    //         step: 2,
    //         label: "This is a reusable slider",
    //         onChange: e => sliderValueChanged(e)
    //       }),
    //       [parentVal]
    //     );
  
    //     return (
    //       <div>
    //         <h1>PARENT VALUE: {parentVal}</h1>
    //         <RangeSlider {...sliderProps} classes="additional-css-classes" />
    //       </div>
    //     );
    //   };