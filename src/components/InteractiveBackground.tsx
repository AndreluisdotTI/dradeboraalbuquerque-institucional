import { useEffect, useState, useRef } from 'react';

interface Triangle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  speed: number;
}

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const triangles: Triangle[] = [
    { id: 1, x: 10, y: 20, size: 80, rotation: 15, opacity: 0.08, speed: 0.03 },
    { id: 2, x: 80, y: 15, size: 120, rotation: 45, opacity: 0.06, speed: 0.02 },
    { id: 3, x: 70, y: 60, size: 100, rotation: -20, opacity: 0.07, speed: 0.025 },
    { id: 4, x: 20, y: 70, size: 60, rotation: 30, opacity: 0.05, speed: 0.035 },
    { id: 5, x: 50, y: 40, size: 90, rotation: -45, opacity: 0.04, speed: 0.02 },
    { id: 6, x: 85, y: 80, size: 70, rotation: 60, opacity: 0.06, speed: 0.03 },
    { id: 7, x: 30, y: 85, size: 50, rotation: -15, opacity: 0.05, speed: 0.04 },
    { id: 8, x: 60, y: 10, size: 65, rotation: 25, opacity: 0.07, speed: 0.025 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x: x - 0.5, y: y - 0.5 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {triangles.map((triangle) => {
        const offsetX = mousePosition.x * 100 * triangle.speed * (triangle.id % 2 === 0 ? 1 : -1);
        const offsetY = mousePosition.y * 100 * triangle.speed * (triangle.id % 3 === 0 ? 1 : -1);
        const rotationOffset = mousePosition.x * 20 * triangle.speed;

        return (
          <div
            key={triangle.id}
            className="absolute transition-transform duration-300 ease-out"
            style={{
              left: `${triangle.x}%`,
              top: `${triangle.y}%`,
              transform: `translate(${offsetX}px, ${offsetY}px) rotate(${triangle.rotation + rotationOffset}deg)`,
            }}
          >
            <svg
              width={triangle.size}
              height={triangle.size}
              viewBox="0 0 100 100"
              style={{ opacity: triangle.opacity * 0.5 }}
            >
              <polygon
                points="50,5 95,95 5,95"
                fill="hsl(220, 40%, 25%)"
                stroke="hsl(220, 35%, 30%)"
                strokeWidth="1"
                strokeOpacity="0.2"
              />
            </svg>
          </div>
        );
      })}
      
      {/* Floating lines */}
      <div
        className="absolute w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-500 ease-out"
        style={{
          left: '15%',
          top: '30%',
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20}px) rotate(${mousePosition.x * 10}deg)`,
        }}
      />
      <div
        className="absolute w-48 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent transition-transform duration-500 ease-out"
        style={{
          right: '20%',
          top: '50%',
          transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * 30}px) rotate(${mousePosition.x * -15}deg)`,
        }}
      />
      <div
        className="absolute w-24 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent transition-transform duration-500 ease-out"
        style={{
          left: '40%',
          bottom: '25%',
          transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * -35}px) rotate(${mousePosition.x * 8}deg)`,
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
