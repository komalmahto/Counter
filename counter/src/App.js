import React from "react";
import CountUp, { useCountUp } from "react-countup";
function App() {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    duration: 5,
    end: 10000,
  });
  return (
    <>
      <div ref={countUpRef} />
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(20000)}>Update</button>
      <h2>
        <CountUp
          start={0}
          end={149788.94}
          duration={2}
          prefix="€"
          decimals={2}
        />
      </h2>
    </>
  );
}

export default App;
