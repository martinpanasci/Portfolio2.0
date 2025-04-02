"use client";
import { useTranslations } from "next-intl";
import StarIcon from "@/assets/icons/star.svg";

export const TapeSection = () => {
  const t = useTranslations("Tape");
  const words = t.raw("words") as string[];

  return (
    <div className="py-16 overflow-x-clip ">
      <div className="bg-[linear-gradient(to_right,#6ee7b7,#38bdf8)] -rotate-3 -mx-1 ">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mx-60">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s] ">
            {words.map((word, index) => (
              <div key={`${word}-${index}`} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
