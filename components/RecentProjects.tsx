"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const chunkArray = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );

const RecentProjects = () => {
  const chunks = chunkArray(projects, 4);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A selection of <span className="text-purple">recent projects</span>
      </h1>

      <Carousel
        className="mt-10"
        plugins={[
          Autoplay({
            delay: 20000,
          }),
        ]}
      >
        <CarouselContent>
          {chunks.map((group, i) => (
            <CarouselItem key={i}>
              <div className="w-full flex justify-center">
                <div className="grid grid-cols-1 custom-1300:grid-cols-2 gap-x-8 custom-1300:gap-x-24 gap-y-8 p-4 max-w-[1200px] mx-auto">
                  {group.map(
                    ({ id, title, des, img, iconLists, link, project }) => (
                      <div
                        key={id}
                        className="sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                      >
                        <PinContainer title={link} href={link}>
                          <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                              <img src="/bg.png" alt="bg-img" />
                            </div>

                            <img
                              src={img}
                              alt={title}
                              className="z-10 absolute bottom-[-10px] w-[90%] transform rotate-[2.63deg]"
                            />
                          </div>

                          <Link href={`/${project}`} target="_blank">
                            <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                              {title}
                            </h1>

                            <p className="lg:text-sm lg:font-normal font-light text-sm line-clamp-3">
                              {des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                              <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                  <div
                                    key={icon}
                                    className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                    style={{
                                      transform: `translateX(-${5 * index * 2}px)`,
                                    }}
                                  >
                                    <img
                                      src={icon}
                                      alt={icon}
                                      className="p-2"
                                    />
                                  </div>
                                ))}
                              </div>

                              <div className="flex justify-center items-center cursor-pointer">
                                <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                                  Read more
                                </p>
                                <FaLocationArrow
                                  className="ms-3"
                                  color="#CBACF9"
                                />
                              </div>
                            </div>
                          </Link>
                        </PinContainer>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="hidden lg:flex justify-center gap-4 mt-6">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default RecentProjects;
