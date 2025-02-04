"use client";
import { useEffect, useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin";


export const ProjectsRecent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita problemas de hidratación en SSR

  return (
    <div id="projects" className="py-24 overflow-x-clip">
      <div className="mx-auto max-w-[375px] md:max-w-[880px] lg:max-w-[1400px]">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl lg:text-5xl text-center mt-6 ">
          A Small Selection of <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">Recent Projects</span>
        </h2>
        <p className="text-center text-white/60 mt-4">
          See how i transformed concepts intro engaging digital experiences
        </p>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map(({ id, title, description, img, iconLists, link }) => (
            <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center
           justify-center sm:w-96 w-[80vw] my-10">
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center w-80 md:w-96 overflow-hidden
               h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img src={img} alt={title} className="z-10 absolute bottom-0 w-full h-full object-cover" />
                </div>
                <h3 className="font-bold lg:text-2xl md:text-lg line-clamp-1">{title}</h3>
                <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2">{description}</p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div key={icon} className="border border-white/[0.2] rounded-full"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                        <img src={icon} alt="icon" className="p-2 rounded-full bg-white lg:w-14 lg:h-14 w-8 h-8
                      flex justify-center items-center invert" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-emerald-300 border border-emerald-300 rounded-xl px-1 py-1 whitespace-nowrap">Check Site</p>

                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "BUGGIA Trainer",
    description: "A platform for managing and selling workout plans with user roles, secure payments, and JWT auth.",
    img: "https://i.imgur.com/8LZp0u9.gif",
    iconLists: ["/react.svg","/nodejs.svg", "/mysql.svg", "/css3.svg", "/ml.svg" ],
    link: "https://youtu.be/VFDjsrt3tsk",
  },
  {
    id: 2,
    title: "URL Shortener",
    description: "A URL shortener with analytics, JWT authentication, and QR code generation.",
    img: "https://i.imgur.com/voAcyGw.png",
    iconLists: ["/react.svg", "/nodejs.svg", "/mysql.svg", "/css3.svg"],
    link: "https://urlshortener.mpanasci.com",
  },
  {
    id: 3,
    title: "App LRobledo",
    description: "Client management and automated WhatsApp messaging using Twilio.",
    img: "https://i.imgur.com/U3yQrl3.png",
    iconLists: ["/react.svg", "/nodejs.svg", "/mysql.svg", "/css3.svg"],
    link: "",
  },
  {
    id: 4,
    title: "My Landing Page",
    description: "Personal landing page with a modern design, animations, and Tailwind CSS optimization.",
    img: "https://i.imgur.com/CxRRcyq.png",
    iconLists: ["/nextjs.svg", "/tail.svg", "/framer.svg"],
    link: "https://dev.mpanasci.com/",
  },
  {
    id: 5,
    title: "Rendersmdp Landing Page",
    description: "A sleek architecture landing page with animations and interactive project showcases.",
    img: "https://i.imgur.com/DZqeKZU.png",
    iconLists: ["/nextjs.svg", "/tail.svg", "/framer.svg"],
    link: "https://rendersmdp.com/",
  },
];

