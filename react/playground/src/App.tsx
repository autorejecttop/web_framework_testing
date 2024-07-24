// import { Gallery } from "./export_import/Gallery";
// import Profile from "./passing_props/Profile";

import { useState } from "react";
import Clock from "./passing_props/Clock";
import Button from "./adding_interactivity/Events";
import Gallery from "./state/Gallery";
import Example from "./reducer/Example";

const colors = ["lightcoral", "midnightblue", "rebeccapurple"];

export const App = () => {
  const [choosenColor, setChoosenColor] = useState(colors[0]);

  // return <>{/* <Gallery /> */}</>;
  // return <Profile />;
  // return (
  //   <div>
  //     <label htmlFor="color">
  //       Pick a color:{" "}
  //       <select
  //         value={choosenColor}
  //         onChange={({ target }) => setChoosenColor(target.value)}
  //         id="color"
  //       >
  //         {colors.map((color) => (
  //           <option value={color} key={color}>
  //             {color}
  //           </option>
  //         ))}
  //       </select>
  //     </label>
  //     <Clock color={choosenColor} time={new Date().toISOString()} />
  //   </div>
  // return <Button />;
  // return (
  //   <div>
  //     <Gallery />
  //     <Gallery />
  //   </div>
  // );

  // return <Example />;
};
