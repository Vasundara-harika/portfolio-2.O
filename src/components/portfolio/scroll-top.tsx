import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      setShow(window.scrollY > 600);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };

  }, []);

  if (!show) return null;

  return (
    <>
      {/* Animation Style */}
      <style>
        {`
          @keyframes FloatBubble {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>

      {/* Scroll Button */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }

        aria-label="Scroll to top"

        className="
          fixed bottom-6 right-6 z-40
          size-12
          grid place-items-center
          rounded-full
          bg-gradient-to-br from-violet to-cyan
          text-white
          shadow-[0_0_30px_-6px_var(--violet)]
          hover:scale-110
          hover:rotate-6
          transition-all
          duration-300
          animate-[fade-in_0.3s,FloatBubble_3s_ease-in-out_infinite]
        "
      >

        <ArrowUp className="size-5" />

      </button>
    </>
  );
}