"use client";

import anime from "animejs";
import { LucideIcon, Music } from "lucide-react";

import { createElement, useEffect, useRef } from "react";

import AdobeAfterEffectsIcon from "../../../icons/icon-adobe-after-effects.svg";
import AdobeIllustratorIcon from "../../../icons/icon-adobe-illustrator.svg";
import AdobePhotoshopIcon from "../../../icons/icon-adobe-photoshop.svg";
import AdobePremiereIcon from "../../../icons/icon-adobe-premiere.svg";
import AsanaIcon from "../../../icons/icon-asana.svg";
import BlenderIcon from "../../../icons/icon-blender.svg";
import ClickUpIcon from "../../../icons/icon-clickup.svg";
import DiscordIcon from "../../../icons/icon-discord.svg";
import DropboxIcon from "../../../icons/icon-dropbox.svg";
// import HevcIcon from "../../../icons/icon-hevc.svg";
import DriveIcon from "../../../icons/icon-drive.svg";
import GoogleAnalyticsIcon from "../../../icons/icon-google-analytics.svg";
import HootsuiteIcon from "../../../icons/icon-hootsuite.svg";
import MondayIcon from "../../../icons/icon-monday.svg";
import NdiIcon from "../../../icons/icon-ndi.svg";
import NotionIcon from "../../../icons/icon-notion.svg";
import PdfIcon from "../../../icons/icon-pdf.svg";
import PowerpointIcon from "../../../icons/icon-powerpoint.svg";
import RunwayIcon from "../../../icons/icon-runway.svg";
import SlackIcon from "../../../icons/icon-slack.svg";
import TeamsIcon from "../../../icons/icon-teams.svg";
import TrelloIcon from "../../../icons/icon-trello.svg";
import UnrealEngineIcon from "../../../icons/icon-unreal-engine.svg";
import WetransferIcon from "../../../icons/icon-wetransfer.svg";
import WordIcon from "../../../icons/icon-word.svg";

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
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr  from-orange-900 to-orange-800 flex items-center justify-center">
          <img
            src={avatar}
            alt={title}
            className="w-[76px] h-[76px] object-cover rounded-full border-4 border-slate-900"
          />
        </div>
        {icons.map((icon, index) => {
          const radius = 52; // Distance from center
          const angle = (2 * Math.PI * index) / icons.length - Math.PI / 2; // Start from top
          const iconX = Math.cos(angle) * radius;
          const iconY = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              className={`absolute w-5 h-5 rounded-full flex items-center justify-center ${icon.color}`}
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
      avatar: "/user-creator.jpeg",
      icons: [
        { icon: AsanaIcon, color: "" },
        { icon: SlackIcon, color: "" },
        { icon: DropboxIcon, color: "" },
        { icon: NotionIcon, color: "" },
        // { icon: HevcIcon, color: "bg-white transform scale-90" },
        { icon: HootsuiteIcon, color: "" },
        { icon: WordIcon, color: "" },
        { icon: PowerpointIcon, color: "" },
        { icon: PdfIcon, color: "" },
        { icon: TrelloIcon, color: "" },
        { icon: WetransferIcon, color: "bg-white invert" },
        { icon: DiscordIcon, color: "" },
        { icon: NdiIcon, color: "bg-white invert" },
        { icon: MondayIcon, color: "" },
        { icon: DriveIcon, color: "" },
        { icon: ClickUpIcon, color: "" },
      ],
      connections: ["editor", "designer", "audio", "agent"],
    },
    {
      id: "editor",
      x: 10,
      y: yAdjust + 60,
      title: "Video Editor",
      avatar: "/user-editor.jpeg",
      icons: [
        { icon: MondayIcon, color: "" },
        { icon: RunwayIcon, color: "bg-white invert transform scale-90" },
        { icon: DiscordIcon, color: "" },
        { icon: DropboxIcon, color: "" },
        { icon: AdobeAfterEffectsIcon, color: "" },
        { icon: AdobePremiereIcon, color: "" },
        { icon: PowerpointIcon, color: "" },
        { icon: WordIcon, color: "" },
        // { icon: HevcIcon, color: "bg-white transform scale-90" },
        { icon: NdiIcon, color: "bg-white invert" },
      ],
      connections: ["designer", "audio"],
    },
    {
      id: "designer",
      x: 35,
      y: yAdjust + 80,
      title: "Designer",
      avatar: "/user-designer.jpeg",
      icons: [
        { icon: ClickUpIcon, color: "" },
        { icon: AdobeIllustratorIcon, color: "" },
        { icon: AdobePhotoshopIcon, color: "" },
        { icon: TrelloIcon, color: "" },
        { icon: HootsuiteIcon, color: "" },
        { icon: UnrealEngineIcon, color: "bg-white invert" },
        { icon: BlenderIcon, color: "" },
        { icon: WetransferIcon, color: "bg-white invert" },
        { icon: DiscordIcon, color: "" },
      ],
      connections: [],
    },
    {
      id: "audio",
      x: 15,
      y: yAdjust + 30,
      title: "Audio Engineer",
      avatar: "/user-audio.jpeg",
      icons: [
        { icon: Music, color: "bg-amber-500" },
        { icon: MondayIcon, color: "" },
        { icon: DiscordIcon, color: "" },
        { icon: DriveIcon, color: "" },
        { icon: WetransferIcon, color: "bg-white invert" },
        { icon: TrelloIcon, color: "" },
      ],
      connections: [],
    },
    {
      id: "agent",
      x: 60,
      y: yAdjust + 15,
      title: "Agent",
      avatar: "/user-agent.jpeg",
      icons: [
        { icon: MondayIcon, color: "" },
        { icon: HootsuiteIcon, color: "" },
        { icon: DropboxIcon, color: "" },
        { icon: AsanaIcon, color: "" },
        { icon: TeamsIcon, color: "" },
        { icon: SlackIcon, color: "" },
        { icon: NotionIcon, color: "" },
        { icon: PowerpointIcon, color: "" },
        { icon: WordIcon, color: "" },
        { icon: GoogleAnalyticsIcon, color: "" },
        { icon: PdfIcon, color: "" },
      ],
      connections: ["advertiser"],
    },
    {
      id: "advertiser",
      x: 90,
      y: yAdjust + 40,
      title: "Advertiser",
      avatar: "/user-advertiser.png",
      icons: [
        { icon: AsanaIcon, color: "" },
        { icon: DropboxIcon, color: "" },
        { icon: PowerpointIcon, color: "" },
        { icon: WordIcon, color: "" },
        { icon: GoogleAnalyticsIcon, color: "" },
        { icon: PdfIcon, color: "" },
        { icon: TeamsIcon, color: "" },
      ],
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
                className="stroke-orange-400 stroke-2"
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
    <div className="pt-24">
      <p className="text-orange-400 uppercase text-2xl tracking- mr-auto text-left">
        Creating content is...
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
          <p className="text-slate-400 italic text-base pt-8 whitespace-nowrap">
            * Typical workflow for{" "}
            <strong className="text-orange-400">one video</strong> of{" "}
            <strong className="text-orange-400">3+</strong> per week{" "}
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
