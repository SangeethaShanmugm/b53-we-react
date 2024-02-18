import "./App.css";
import { Counter } from "./component/Counter";
import { useState } from "react"


export default function App() {
  //JS starts

  //JS ends
  //JSX starts
  return (
    <div className="App">
      <AddColor />


    </div>
  );
  //JSX ends
}


function AddColor() {
  const [color, setColor] = useState("skyblue")

  const [colorList, setColorList] = useState(["orange", "red", 'pink', "purple"])

  const styles = {
    backgroundColor: color
  }
  return (
    <div>
      <div className="add-color">
        <input style={styles} type="text" onChange={(event) => setColor(event.target.value)} />
        <button
          // copy the colorList and add newColor
          onClick={() => setColorList([...colorList, color])
          }
        >Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* <ColorBox color={colorList[1]} /> */}
    </div>
  )
}


function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    width: "170px",
    height: "20px",
    marginTop: "5px",
  }
  return (
    <div style={styles}></div>
  )
}