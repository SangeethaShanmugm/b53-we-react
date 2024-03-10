import { ColorBox } from "./ColorBox";
import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("skyblue");

  const [colorList, setColorList] = useState(["orange", "red", 'pink', "purple"]);

  const styles = {
    backgroundColor: color
  };
  return (
    <div>
      <div className="add-color">
        <input style={styles} type="text" onChange={(event) => setColor(event.target.value)} />
        <button
          // copy the colorList and add newColor
          onClick={() => setColorList([...colorList, color])}
        >Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* <ColorBox color={colorList[1]} /> */}
    </div>
  );
}

//Task  => 15mins
// AddProduct => component
// /product/add => AddProduct
// 5 input field + 1 button