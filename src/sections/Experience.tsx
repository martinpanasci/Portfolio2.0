import { Button } from "@/components/ui/moving-border";

export const Experience = () => {
    return (
        <div id="experience" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
                        What Shaped Me
                    </p>
                </div>
                <h2 className="font-serif text-3xl text-center mt-6 lg:text-5xl">
                    My Work <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">Experience</span>
                </h2>
                <p className="text-center text-white/60 mt-4">
                    Learn more about who I am and what I have done.
                </p>

                <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                    {workExperience.map((card) => (
                        <Button key={card.id} borderRadius="1.75rem" 
                        duration={Math.floor(Math.random() * 10000) + 5000}
                        className="flex-1 text-white border-emerald-500/[0.2] bg-emerald-300/5">
                            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                                <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16" />
                                <div className="lg:ms-5">
                                    <h3 className="text-start text-xl md:text-2xl font-bold">{card.title}</h3>
                                    <p className="text-start text-white-100 mt-3 font-semibold" dangerouslySetInnerHTML={{ __html: card.desc }}/>
                                </div>
                            </div>
                        </Button>
                    ))}
                </div>

            </div>
        </div>
    )
}

const workExperience = [
    {
      id: 1,
      title: "Software Developer - Open to Work",
      desc: ` 📌 Seeking a Role in the Corporate Tech World <br />
      💬 Looking to join a corporate team as a backend or full-stack developer, focusing on scalable architectures, API development, and database optimization.` ,
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Full Stack Developer - Freelance",
      desc: `📌 Building Scalable & Secure Solutions <br />
           💬 Designed and developed full-stack applications with a strong focus on performance, security, and seamless backend/frontend integration.`,
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Video Game Coach",
      desc: `📌 Freelance, 2020 - Present <br />
           💬 Led a team of professional players, providing coaching and in-game assistance while managing client acquisition, payments, and high-performance results.`,
      className: "md:col-span-2", 
      thumbnail: "/exp4.svg",
    },
    {
      id: 4,
      title: "IT Area Coordinator",
      desc: `📌 Don Orione School, 2017 - 2021 <br />
           💬 Ensured optimal system performance by providing IT support, solving technical issues, and managing server maintenance across multiple offices.`,
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
  ];