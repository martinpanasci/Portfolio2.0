"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Modal = ({ onClose, data }: { onClose: () => void; data: any }) => {
    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-3xl">
                <div className="bg-emerald-300/5 rounded-3xl border border-emerald-500/[0.2] p-6 shadow-lg max-w-5xl w-full relative">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-white hover:text-black  text-xl p-2"
                    >
                        ✖
                    </button>

                    <h2 className="font-serif text-3xl text-center pb-4 lg:text-5xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">{data.title}</h2>
                    <div className="flex justify-center">
                        <img src={data.img} alt={data.title} className="w-auto h-80 object-cover rounded-lg mb-4" />
                    </div>
                    <p className="lg:text-base lg:font-normal font-light text-sm mb-6" dangerouslySetInnerHTML={{ __html: data.des }}></p>

                    <div className="flex space-x-3 mb-4">
                        {data.iconLists.map((tech: { icon: string; iconName: string }, index: number) => (
                            <div key={index} className="flex justify-center items-center gap-1">
                                <div className="border border-white/[0.2] rounded-full">
                                    <img src={tech.icon} alt={tech.iconName} 
                                    className="p-2 rounded-full bg-white lg:w-14 lg:h-14 w-8 h-8
                                    flex justify-center items-center invert" />
                                </div>
                                <p className="text-base text-white">{tech.iconName}</p>
                            </div>
                        ))}
                    </div>

                    {data.link ? (
                        <div className="flex justify-center"> 
                            <a
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-center bg-black text-white py-3 px-6 rounded-xl
                                gap-2 w-max"
                            >
                                Visit Project
                                <ArrowUpRightIcon className="size-5" />
                            </a>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">No link available for this project.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

