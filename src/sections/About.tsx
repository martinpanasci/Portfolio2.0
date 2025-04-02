"use client";
import { useTranslations } from "next-intl";
import { Card } from "@/components/Card";
import { TechIcon } from "@/components/TechIcon";
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book.jpg";
import JavasscripIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/square-ts.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import nextjsIcon from "@/assets/icons/nextjs.svg";
import nodejsIcon from "@/assets/icons/nodejs.svg";
import expressIcon from "@/assets/icons/express.svg";
import mysqlIcon from "@/assets/icons/mysql.svg";
import tailwindIcon from "@/assets/icons/tailwind.svg";
import mapImage from "@/assets/images/mapa.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: nextjsIcon },
  { title: "Node.js", iconType: nodejsIcon },
  { title: "Express.js", iconType: expressIcon },
  { title: "MySQL", iconType: mysqlIcon },
  { title: "JavaScript", iconType: JavasscripIcon },
  { title: "TypeScript", iconType: TypescriptIcon },
  { title: "HTML5", iconType: HtmlIcon },
  { title: "CSS", iconType: CssIcon },
  { title: "Tailwind CSS", iconType: tailwindIcon },
  { title: "Github", iconType: GithubIcon },
];



export const AboutSection = () => {
  const t = useTranslations("About");
  const th = useTranslations("About.hobbies");
  const ref = useRef(null);

  const hobbies = [
    { title: th("football"), emoji: "⚽", left: "5%", top: "5%" },
    { title: th("gaming"), emoji: "🎮", left: "50%", top: "15%" },
    { title: th("hiking"), emoji: "🥾", left: "10%", top: "35%" },
    { title: th("coaching"), emoji: "💪", left: "55%", top: "60%" },
    { title: th("fitness"), emoji: "🏋️‍♀️", left: "70%", top: "35%" },
    { title: th("crypto"), emoji: "💰", left: "15%", top: "65%" },
    { title: th("trading"), emoji: "📈", left: "35%", top: "25%" },
    { title: th("bike"), emoji: "🚴‍♀️", left: "75%", top: "0%" },
  ];

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {t("label")}
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 lg:text-5xl">
          {t("title.part1")}{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {t("title.part2")}
          </span>
        </h2>
        <p className="text-center text-white/60 mt-4">{t("subtitle")}</p>

        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* My Reads */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">{t("reads.title")}</h3>
                </div>
                <p className="text-sm text-white/60 mt-2">{t("reads.text")}</p>
              </div>
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>

            {/* My Toolbox */}
            <Card className="h-auto p-0 md:col-span-3 lg:col-span-2">
              <div className="flex flex-col px-6 pt-6">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">{t("toolbox.title")}</h3>
                </div>
                <p className="text-sm text-white/60 mt-2">{t("toolbox.text")}</p>
              </div>
              <div className="flex ml-6 my-6">
                <div className="flex flex-wrap py-0.5 gap-6">
                  {toolboxItems.map(item => (
                    <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                      <TechIcon component={item.iconType} />
                      <span className="font-semibold ">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Beyond the Code */}
            <Card className="h-[320px] p-0 flex flex-col col-span-3">
              <div className="flex flex-col px-6 py-6">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">{t("beyond.title")}</h3>
                </div>
                <p className="text-sm text-white/60 mt-2">{t("beyond.text")}</p>
              </div>
              <div className="relative flex-1" ref={ref}>
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={ref}
                  >
                    <span className="font-medium text-gray-950">{hobby.emoji} {hobby.title}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Location */}
            <Card className="h-[320px] p-0 relative col-span-2">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image src={SmileMemoji} alt="smiling memoji" className="size-20" />
                <p className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-sm font-semibold text-white bg-black/50 px-4 py-1 rounded-lg w-[180px] text-center">
                  Mar del Plata, Buenos Aires, Argentina 📍
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
