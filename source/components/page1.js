import React, {
    Component,
    memo,
    useCallback,
    useState,
    useEffect,
    useMemo
  } from "react";
import {
    makeStyles
  } from "@material-ui/core";
import RangeSlider from './slider'

const useStyles = makeStyles(() => ({
   
    barStyles: {
        display: "flex",
        justifyContent: "space-between",
      },
  }));
function Page1({peopleJSON}) {
    const { barStyles } = useStyles();
    const [parentVal, setParentVal] = useState(1500);

    const sliderValueChanged = useCallback(val => {
      console.log("NEW VALUE", val);
      setParentVal(val);
    });

    const sliderProps = useMemo(
      () => ({
        min: 1000,
        max: 4000,
        value: parentVal,
        step: 2,
        label: "This is a reusable slider",
        onChange: e => sliderValueChanged(e)
      }),
      [parentVal]
    );
  return (
<div>   
    <RangeSlider {...sliderProps} classes="additional-css-classes" />
    <div class="row">
    {peopleJSON.map((item, index) => {
            let num = item.balance.split('$');
            let amount = num[1].split(',');
            
          if(Number(amount.join(""))>1000 && Number(amount.join(""))<parentVal) {  
          return (
            <div class="col-sm-5" key={index} style={{ margin: "30px" }}>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{item.name} : </h5>
                  <h5 class="card-text">Balance : {item.balance}</h5>
                  
                </div>
              </div>
            </div>
          );
                }
                else {
                    return <></>
                }
        })}
        </div>
          </div>
  );

}

export default Page1;