import React from 'react';

const Galaxy = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background base */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950" />
      
      {/* Stars - different sizes and brightness */}
      <div className="stars absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="star absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Larger bright stars */}
      <div className="bright-stars absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star absolute bg-blue-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              boxShadow: `0 0 ${Math.random() * 15 + 10}px rgba(147, 197, 253, 0.6)`,
              animation: `twinkle ${Math.random() * 3 + 1}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Moving cosmic dust particles */}
      <div className="particles absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.6)`,
              animation: `float ${Math.random() * 10 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Drifting particles */}
      <div className="drifting-particles absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: `rgba(255, ${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 0.4)`,
              animation: `drift ${Math.random() * 20 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Pulsing cosmic orbs */}
      <div className="cosmic-orbs absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="orb absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              background: `radial-gradient(circle, rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.8) 0%, rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.2) 100%)`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(147, 197, 253, 0.5)`,
              animation: `pulse ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Nebula-like gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-transparent to-transparent" 
           style={{
             background: 'radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)'
           }} />
      
      {/* Cosmic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-900/10 to-purple-900/20" />
    </div>
  );
};

export default Galaxy;
