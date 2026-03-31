import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  
  useEffect(() => {
    // 1. Immediately disable on touch devices to prevent mobile bugs
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    // 2. Setup highly performant GSAP bindings for smooth physics
    const xMoveCursor = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3", force3D: true });
    const yMoveCursor = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3", force3D: true });
    
    const xMoveDot = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power3", force3D: true });
    const yMoveDot = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power3", force3D: true });

    // Center offsets relative to their width/height
    gsap.set([cursor, dot], { xPercent: -50, yPercent: -50 });

    let isVisible = false;

    // 3. Handle basic movement and ensure cursor is visible when moving
    const onMouseMove = (e) => {
      if (!isVisible) {
        gsap.to([cursor, dot], { opacity: 1, duration: 0.3, overwrite: "auto" });
        isVisible = true;
      }
      xMoveCursor(e.clientX);
      yMoveCursor(e.clientY);
      xMoveDot(e.clientX);
      yMoveDot(e.clientY);
    };

    // 4. Handle Window boundaries
    const onMouseLeave = () => {
      isVisible = false;
      gsap.to([cursor, dot], { opacity: 0, duration: 0.3, overwrite: "auto" });
    };

    const onMouseEnter = () => {
      isVisible = true;
      gsap.to([cursor, dot], { opacity: 1, duration: 0.3, overwrite: "auto" });
    };

    // 5. Flawless Hover Delegation using native CSS selectors
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target.closest) return; // Ignore Document/Window edge cases
      
      const isHoverable = target.closest('a, button, .hoverable, input, textarea');
      
      if (isHoverable) {
        gsap.to(cursor, {
          scale: 1.8,
          backgroundColor: "#ffffff",
          borderColor: "transparent",
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
        gsap.to(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          overwrite: "auto"
        });
      }
    };

    const onMouseOut = (e) => {
      if (!e.target.closest) return;
      
      // If the mouse is still inside a hoverable element, do nothing
      const stillHovering = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('a, button, .hoverable, input, textarea');
      
      if (!stillHovering) {
        // Revert to default state
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "#ffffff",
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto"
        });
        gsap.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.2,
          overwrite: "auto"
        });
      }
    };

    // Bind events
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full border-2 border-white mix-blend-difference opacity-0 hidden sm:block will-change-transform" 
      />
      <div 
        ref={dotRef} 
        className="pointer-events-none fixed top-0 left-0 z-[10000] w-2 h-2 rounded-full bg-white mix-blend-difference opacity-0 hidden sm:block will-change-transform" 
      />
    </>
  );
}
