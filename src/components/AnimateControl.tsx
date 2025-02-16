/**
 * @fileoverview Receive React state variables for control
 *
 * @param {boolean} animationOn
 * @param {(value: boolean) => void} setAnimationOn
 * @returns {JSX.Element}
 */

type AnimateControlProps = {
  animationOn: boolean;
  setAnimationOn: (value: boolean) => void;
};

const text = { on: "Animation ON", off: "Animation OFF" };

const AnimateControl: React.FC<AnimateControlProps> = ({
  animationOn,
  setAnimationOn,
}) => {
  return (
    <section>
      {!animationOn && (
        <button onClick={() => setAnimationOn(true)}>{text.on}</button>
      )}
      {animationOn && (
        <button onClick={() => setAnimationOn(false)}>{text.off}</button>
      )}
    </section>
  );
};

export default AnimateControl;
