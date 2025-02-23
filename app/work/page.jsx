"use client";
import React from 'react';

import {motion} from "framer-motion";
import {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import WorkSliderBtns from '../../components/WorkSliderBtns';
import "swiper/css";

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Aqua Solutions',
    description: "The Aqua Solutions website is designed with a clean, modern, and user-friendly interface that reflects the professionalism and reliability of the plumbing company. The website offers a seamless experience for users who are looking for high-quality plumbing services, whether for residential or commercial needs",
    stack:[
      {
        name:'Figma'
      },
      {
        name:'Next.JS'
      },
      {
        name:'Tailwind CSS'
      },
    ],
      image: '/assets/work/Web-Screen-1.png',
      live:'',
      github:"",
  },
  {
    num: '02',
    category: 'frontend',
    title: 'The Lotus Garden',
    description: "The Lotus Garden website features a clean, elegant design that reflects the restaurant's authentic Asian flavors and inviting atmosphere. The interactive menu showcases a variety of dishes with high-quality images and detailed descriptions, while the About Us section shares the restaurant's story and dedication to quality.",
    stack:[
      {
        name:'Figma'
      },
      {
        name:'Next.JS'
      },
      {
        name:'Javascript'
      },
    ],
      image: '/assets/work/Web-Screen-2.png',
      live:'',
      github:"",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Pulse Fitness',
    description: "I created a sleek and user-friendly website for Pulse Fitness that showcases the gym's offerings in a modern and engaging way. The design emphasizes simplicity and ease of navigation, highlighting key features like membership options, class schedules, and contact information. With a focus on clean visuals and clear calls to action, the website provides an inviting experience for potential members.",
    stack:[
      {
        name:'Next.JS'
      },
      {
        name:'Tailwind CSS'
      },
      {
        name:'HTML 5'
      },
    ],
      image: '/assets/work/Web-Screen-3.png',
      live:'',
      github:"",
  }
]



const work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 2.4, duration:0.4, ease:"easeIn"},}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className='flex flex-col gap-[30px] h-[50%]'>
            <div className='text-8xl leading-none font-extrabold text-transparent text-outline '>
              {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white
               group-hover:text-accent transition-all 
               duration-500 capitalize">{project.title}
               </h2>
               <p>
                {project.description}
                </p>
                {/* stack */}
                <ul className='flex gap-4 '>
                  {project.stack.map((item, index) =>{
                    return <li  key={index} className='bg-blue-600 text-xl text-white p-2 rounded-xl'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                      </li>
                  })}
                </ul>
                {/* border */}
                <div className='border border-white'></div>
                {/* buttons */}
                <div className='flex items-center gap-4'>
                  {/* live project button */}
                  <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] bg-white/5  rounded-full flex justify-center items-center group'>
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                    {/* github project button */}
                  <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] bg-white/5  rounded-full flex justify-center items-center group'>
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                </div>
                </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30}
             slidesPerView={1}
             className='xl:h-[520px] mb-12'
             onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (<SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] flex group relative 
                  justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                    </div>
                  {/* image */}
                  <div className='relative w-full h-full'>
                    <Image src={project.image} fill className='object-cover' alt=""/>
                  </div>
                  </div>
                  
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="absolute top-[50%] transform -translate-y-1/2 left-4 right-4 z-20 flex justify-between xl:left-0 xl:right-0 xl:top-[calc50%_-_22px] xl:w-full xl:justify-between"
        btnStyles="bg-white/5 p-3 rounded-full flex justify-center items-center"
        iconStyles="text-white text-2xl"/>
            </Swiper>
            </div>
        </div>
      </div>
      </motion.section>
  )
}

export default work