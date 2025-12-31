import React from 'react';

export default function App() {
  return (
    <div className="size-full bg-gray-50 p-[1cm]">
      <div className="relative w-full h-full bg-white rounded-[2.5rem] border-4 border-[#ff6600] flex items-end justify-center pb-8 overflow-hidden">
        {/* Animated Giraffe */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative animate-bounce">
            <img
              src="https://imagine-public.x.ai/imagine-public/images/907a83e2-a8a4-4774-b19f-97ceff005528.png?cache=1&dl=1"
              alt="Cute giraffe"
              className="w-48 h-48 object-contain"
              style={{
                filter: 'brightness(1.2) contrast(1.1)',
                mixBlendMode: 'darken'
              }}
            />
          </div>
          <RotatingGreeting />
        </div>
      </div>
    </div>
  );
}

function RotatingGreeting() {
  const greetings = ['Hello', 'こんにちは', 'Hallo', 'مرحبا', 'হ্যালো'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 3500); // Increased from 2000ms to 3500ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group bg-white border-4 border-orange-500 px-6 py-2 rounded-full min-w-[120px] text-center hover:bg-orange-500 transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden">
      <span className="text-orange-500 group-hover:text-white transition-colors duration-300 ease-in-out relative z-10 inline-block group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-hover:animate-pulse">
        {greetings[index]}
      </span>
    </div>
  );
}