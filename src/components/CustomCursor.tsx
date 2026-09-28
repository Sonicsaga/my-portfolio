import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'image' | 'text'>('default');
  const [cursorText, setCursorText] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with hover capability
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select');
      const imageElement = target.closest('[data-cursor="view"], [data-cursor="explore"], img');

      if (imageElement) {
        setCursorType('image');
        setCursorText(imageElement.getAttribute('data-cursor-text') || 'VIEW');
      } else if (interactive) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;
    const follow = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };
    animationFrameId = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!visible) return null;

  return (
    <>
      {/* Central pinpoint */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75 mix-blend-difference hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: cursorType === 'pointer' ? '6px' : '4px',
          height: cursorType === 'pointer' ? '6px' : '4px',
          backgroundColor: '#F4F1EA',
        }}
      />

      {/* Trailing halo / label ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-all duration-300 ease-out border hidden md:flex items-center justify-center font-mono text-[9px] tracking-widest uppercase font-semibold"
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0) translate(-50%, -50%)`,
          width: cursorType === 'image' ? '70px' : cursorType === 'pointer' ? '42px' : '26px',
          height: cursorType === 'image' ? '70px' : cursorType === 'pointer' ? '42px' : '26px',
          borderColor: cursorType === 'image' ? 'rgba(180, 0, 24, 0.85)' : 'rgba(244, 241, 234, 0.35)',
          backgroundColor:
            cursorType === 'image' ? 'rgba(180, 0, 24, 0.18)' : 'rgba(255, 255, 255, 0.02)',
          backdropFilter: cursorType === 'image' ? 'blur(2px)' : 'none',
          color: '#F4F1EA',
        }}
      >
        {cursorType === 'image' && cursorText && (
          <span className="text-[10px] tracking-widest text-[#F4F1EA] drop-shadow-sm">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
