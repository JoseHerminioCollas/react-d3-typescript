import React from "react";

const AnimateControl = ({ animationOn, setAnimationOn }: any) => {
  return (
    <section>
      Animate
      {!animationOn && <button onClick={() => setAnimationOn(true)}>ON</button>}
      {animationOn && (
        <button onClick={() => setAnimationOn(false)}>OFF</button>
      )}
    </section>
  );
};

export default AnimateControl;
