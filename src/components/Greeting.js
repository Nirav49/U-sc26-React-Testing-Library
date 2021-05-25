import { useState } from "react";
import classes from "./Greeting.module.css";
import Prop from "./Prop.js";

const Greeting = () => {
  const [changed, setChanged] = useState(false);
  const [pr, setPr] = useState(true);

  const changedHandler = () => {
    setChanged(true);
  };

  return (
    <div className={classes.divs}>
      <h2>Hello Section 26</h2>
      {!changed && <Prop>It's good to see you!</Prop>}
      {changed && <Prop>Changed..</Prop>}
      <button onClick={changedHandler} className={classes.bt}>
        Change Effect
      </button>
    </div>
  );
};

export default Greeting;
