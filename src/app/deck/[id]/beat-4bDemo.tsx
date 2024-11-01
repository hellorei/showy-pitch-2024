import anime from "animejs";
import { useEffect, useRef } from "react";

export default function DeckPage({ current }: { current?: boolean }) {
  const rectRef = useRef(null);
  const rectRefB = useRef(null);
  console.log(current);

  useEffect(() => {
    anime({
      targets: rectRef.current,
      strokeDashoffset: [anime.setDashoffset, 100],
      easing: "linear",
      duration: 2000,
      loop: true,
    });
    anime({
      targets: rectRefB.current,
      strokeDashoffset: [anime.setDashoffset, -100],
      easing: "linear",
      duration: 2000,
      loop: true,
    });
  }, []);

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-center relative">
        Features Demo
      </p>
      <div className="flex items-center justify-center">
        <div className="aspect-video h-[520px]">
          <iframe
            src="https://drive.google.com/file/d/1fsnueDJy7qUfVDtkBxx8jdoLpXfMSJB1/preview"
            width="100%"
            height="100%"
            className="rounded-xl overflow-hidden"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
