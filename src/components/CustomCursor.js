import { useEffect, useRef } from "react";

function CustomCursor() {
  const primaryCursorRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const mouseX = clientX - primaryCursorRef.current.clientWidth / 2;
        const mouseY = clientY - primaryCursorRef.current.clientHeight / 2;

        primaryCursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      });
    }, 500);
  }, []);

  return (
    <>
      <div className="main-cursor customcursor" ref={primaryCursorRef}></div>
    </>
  );
}

export default CustomCursor;
