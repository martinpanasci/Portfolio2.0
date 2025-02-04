'use client'
import { Card } from "@/components/Card";
import { TechIcon } from "@/components/TechIcon";
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book.jpg";
import JavasscripIcon from "@/assets/icons/square-js.svg";
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
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Next.js',
    iconType: nextjsIcon,
  },
  {
    title: 'Node.js',
    iconType: nodejsIcon,
  },
  {
    title: 'Express.js',
    iconType: expressIcon,
  },
  {
    title: 'MySQL',
    iconType: mysqlIcon,
  },
  {
    title: 'JavaScript',
    iconType: JavasscripIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS',
    iconType: CssIcon,
  },
  {
    title: 'Tailwind CSS',
    iconType: tailwindIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },

]

const hobbies = [
  {
    title: 'Football',
    emoji: '⚽',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '50%',
    top: '15%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Coaching',
    emoji: '💪',
    left: '55%',
    top: '60%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♀️',
    left: '70%',
    top: '35%',
  },
  {
    title: 'Cryptocurrency',
    emoji: '💰',
    left: '15%',
    top: '65%',
  },
  {
    title: 'Trading',
    emoji: '📈',
    left: '35%',
    top: '25%',
  },
  {
    title: 'Bike riding',
    emoji: '🚴‍♀️',
    left: '75%',
    top: '0%',
  },


]

export const AboutSection = () => {
  const contrainRef = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            About Me
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 lg:text-5xl">
          A Glimpse Into <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">My World</span>
        </h2>
        <p className="text-center text-white/60 mt-4">
          Learn more about who I am, what I do, and what inspires me.
        </p>
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* My Reads */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl ">My Reads</h3>
                </div>
                <p className="text-sm text-white/60 mt-2">Explore the books shaping my perspectives.</p>
              </div>
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="book cover" className="" />
              </div>
            </Card>

            {/* My Toolbox */}
            <Card className="h-auto p-0 md:col-span-3 lg:col-span-2">
              <div className="flex flex-col px-6 pt-6">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">My Toolbox</h3>
                </div>
                <p className="text-sm text-white/60 mt-2">
                  Explore the technologies and tools I use to craft exceptional digital experiences.
                </p>
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
            <Card className="h-[320px] p-0 flex flex-col col-span-3 ">
              <div className="flex flex-col px-6 py-6">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">Beyond the Code</h3>
                </div>
                <p className="text-sm text-white/60 mt-2">
                  Explore my interests and hobbies beyond the digital realm.
                </p>
              </div>
              <div className="relative flex-1" ref={contrainRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 
                bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5
                absolute cursor-pointer"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={contrainRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* My Location */}
            <Card className="h-[320px] p-0 relative col-span-2">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full 
                after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 
                after:rounded-full after:outline-gray-950/30"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={SmileMemoji} alt="smiling memoji" className="size-20" />
                <p className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-sm font-semibold text-whit bg-black/50 px-4 py-1 rounded-lg w-[180px] text-center">
                  Mar del Plata, Buenos Aires, Argentina 📍
                </p>
              </div>
            </Card>


          </div>
        </div>
      </div>
    </div>);
};
