"use client";

import anime from "animejs";
import {
  BriefcaseBusiness,
  LucideIcon,
  MessageCircle,
  MonitorPlay,
  Music,
  Newspaper,
  Pencil,
  Users,
  Video,
} from "lucide-react";

import { createElement, useEffect, useRef } from "react";

interface SoftwareIcon {
  icon: LucideIcon;
  color: string;
}

interface Node {
  id: string;
  x: number;
  y: number;
  title: string;
  icons: SoftwareIcon[];
  connections: string[]; // Changed to string[] since we only use the id
  avatar: string;
}

const NetworkNode: React.FC<Node> = ({ x, y, title, icons, avatar }) => {
  return (
    <div
      className="absolute group w-20 h-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)", // Center the node
      }}
    >
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr  from-cyan-800 to-cyan-700 flex items-center justify-center">
          <img
            src={avatar}
            alt={title}
            className="w-[76px] h-[76px] rounded-full border-4 border-slate-900"
          />
        </div>
        {icons.map((icon, index) => {
          const radius = 44; // Distance from center
          const angle = (2 * Math.PI * index) / icons.length - Math.PI / 2; // Start from top
          const iconX = Math.cos(angle) * radius;
          const iconY = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              className={`absolute w-6 h-6 rounded-full flex items-center justify-center ${icon.color}`}
              style={{
                left: "34%",
                top: "35%",
                transform: `translate(${iconX}px, ${iconY}px)`,
              }}
            >
              {createElement(icon.icon, {
                size: 14,
                className: "text-white",
              })}
            </div>
          );
        })}
      </div>
      <span className="absolute -bottom-10 left-1/2 font-narrow font-semibold uppercase transform -translate-x-1/2 text-slate-200 text-sm whitespace-nowrap">
        {title}
      </span>
    </div>
  );
};

const NetworkGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const lineRefs = useRef<{ [key: string]: SVGLineElement }>({});

  useEffect(() => {
    // Wait for next frame to ensure DOM is ready
    const timeout = setTimeout(() => {
      anime({
        targets: svgRef.current,
        strokeDashoffset: [anime.setDashoffset, 120],
        easing: "linear",
        duration: 3000,
        loop: true,
      });
      // const lineElements = Object.values(lineRefs.current);
      // if (lineElements.length > 0) {
      //   const animation = anime({
      //     targets: lineElements,
      //     strokeDashoffset: [anime.setDashoffset, 0],
      //     easing: "easeInOutSine",
      //     duration: 1500,
      //     delay: function (el, i) {
      //       return i * 250;
      //     },
      //     direction: "alternate",
      //     loop: true,
      //   });

      //   // Store animation for cleanup
      //   return () => {
      //     animation.pause();
      //     clearTimeout(timeout);
      //   };
      // }
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timeout);
  }, []);

  const yAdjust = -10;

  const nodes: Node[] = [
    {
      id: "creator",
      x: 50,
      y: yAdjust + 45,
      title: "Creator",
      avatar:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      icons: [
        { icon: Video, color: "bg-blue-500" },
        { icon: MessageCircle, color: "bg-green-500" },
        { icon: Newspaper, color: "bg-indigo-400" },
        { icon: Newspaper, color: "bg-indigo-400" },
        { icon: Newspaper, color: "bg-indigo-400" },
        { icon: Newspaper, color: "bg-indigo-400" },
      ],
      connections: ["editor", "designer", "audio", "agent"],
    },
    {
      id: "editor",
      x: 10,
      y: yAdjust + 60,
      title: "Video Editor",
      avatar:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      icons: [
        { icon: Pencil, color: "bg-purple-500" },
        { icon: Video, color: "bg-blue-500" },
      ],
      connections: ["designer", "audio"],
    },
    {
      id: "designer",
      x: 35,
      y: yAdjust + 80,
      title: "Designer",
      avatar:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      icons: [
        { icon: MonitorPlay, color: "bg-indigo-500" },
        { icon: Pencil, color: "bg-rose-500" },
      ],
      connections: [],
    },
    {
      id: "audio",
      x: 15,
      y: yAdjust + 30,
      title: "Audio Engineer",
      avatar:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      icons: [
        { icon: Music, color: "bg-amber-500" },
        { icon: MessageCircle, color: "bg-green-500" },
      ],
      connections: [],
    },
    {
      id: "agent",
      x: 60,
      y: yAdjust + 15,
      title: "Agent",
      avatar:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      icons: [
        { icon: BriefcaseBusiness, color: "bg-teal-500" },
        { icon: MessageCircle, color: "bg-green-500" },
      ],
      connections: ["advertiser"],
    },
    {
      id: "advertiser",
      x: 90,
      y: yAdjust + 40,
      title: "Advertiser",
      avatar:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      icons: [{ icon: Users, color: "bg-indigo-500" }],
      connections: [],
    },
  ];

  return (
    <div className="relative w-full h-[480px]">
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
        ref={svgRef}
      >
        {nodes.map((node) =>
          node.connections.map((connId, idx) => {
            const target = nodes.find((n) => n.id === connId);
            if (!target) return null;
            const lineId = `line-${node.id}-${connId}-${idx}`;

            return (
              <line
                key={lineId}
                ref={(el) => {
                  if (el) {
                    lineRefs.current[lineId] = el;
                  }
                }}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                className="stroke-cyan-700 stroke-2"
                strokeDasharray="6"
              />
            );
          })
        )}
      </svg>

      {nodes.map((node) => (
        <NetworkNode key={node.id} {...node} />
      ))}
    </div>
  );
};

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  return (
    <div>
      <p className="text-indigo-500 uppercase text-2xl tracking-wide mr-auto text-left">
        Creating content is not a simple process
      </p>
      <div className="grid grid-cols-5 gap-12 items-start justify-start pt-8">
        <div className="col-span-2 text-left mb-0 flex flex-col pt-0">
          <div className="text-[9.9rem] font-narrow font-semibold leading-[0.8] uppercase tracking-tighter relative right-2 pb-4">
            Not a
            <br />
            simple
            <br />
            task
          </div>
          <p className="text-slate-400 italic text-base tracking-tight">
            Typical professional workflow <strong>per production</strong>{" "}
            <span className="not-italic">→</span>
          </p>
        </div>
        <div className="col-span-3">
          <NetworkGraph />
        </div>
      </div>
    </div>
  );
}
