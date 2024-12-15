import React, { useState, useEffect } from 'react';

interface SnowFlake {
  key: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
}

const generateSnow = () => ({
  key: Date.now(),
  x: Math.random() * window.innerWidth,
  y: 0,
  opacity: Math.random() * 0.7,
  size: Math.random() * 5,
});

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<SnowFlake[]>([generateSnow()]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSnowflakes((prevSnowflakes: SnowFlake[]) => [
        ...prevSnowflakes,
        generateSnow(),
      ]);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw' }}>
      {snowflakes.map((flake) => (
        <div
          key={flake.key}
          style={{
            position: 'absolute',
            top: flake.y,
            left: flake.x,
            width: flake.size,
            height: flake.size,
            borderRadius: '50%',
            backgroundColor: 'white',
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;