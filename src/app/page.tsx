"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SmoothScroll from "@/lib/SmoothScroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    SmoothScroll();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HeroSection />
      <AboutMe />
      </div>
    </div>
  );
}

function HeroSection() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const foregroundRef = useRef(null);
  const middlegroundRef = useRef(null);

  useGSAP(() => {
    // const introTimel = gsap.timeline({

    // });
    // introTimel.to(
    //   textRef.current,
    //   { opacity: 1, y: 0, duration: 1 }
    // );
    // introTimel.from(
    //   '.stagger-bg',
    //   { y: 500, ease: "power2.inOut", stagger: 0.2, duration: 2 },
    //   "<"
    // );
    // const introtl = gsap.timeline({
    // })
    // introtl.to(textRef.current, {
    //   opacity:1, 
    //   y:0, 
    //   duration:1,
    //   ease:'power1.inOut',
    //  })
    // gsap.set(textRef.current, { opacity: 1, y: 0 });
    document.body.style.overflow = "hidden";
    setTimeout(() => {
  document.body.style.overflow = "auto";
}, 1000);
    const timel = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "50% 50%",
        markers: true,
        scrub: true,
      },
      immediateRender: false,
    });
    timel.to(
      textRef.current,
      {
        y: -500,
        immediateRender: false,
      },
      "i"
    );
    timel.to(
      [...document.querySelectorAll(".stagger-bg")].reverse(),
      {
        y: 400,
        stagger: 0.15,
        immediateRender: false,
      },
      "i"
    );
  });
  return (
    <div
      ref={containerRef}
      id="smooth-content"
      className="py-100 relative flex h-screen overflow-hidden bg-[#8539bf] bg-linear-to-t from-[#C95FCB]"
    >
      <Image
        className="absolute top-0 right-0 mx-120 p-10 my-5 stagger-bg"
        src={"/sun.svg"}
        alt="sun"
        width={400}
        height={200}
      />
      <div className="">
        <Image
          className="absolute bottom-0 pb-35 stagger-bg"
          src={"/mgbuildings.svg"}
          alt="middleground buildings"
          width={2000}
          height={500}
        />
        <Image
          className="absolute bottom-0 pb-35 stagger-bg"
          src={"/fgbuildings.svg"}
          alt="foreground buildings"
          width={2000}
          height={500}
        />
        <Image
          className="absolute bottom-0"
          src={"/river.svg"}
          alt="river"
          width={2000}
          height={200}
        />
      </div>

      <div ref={textRef} className="text-7xl px-30 flex flex-col absolute text-opacity-0">
        <h1 className="font-sans-[Oxanium]">Hi, I am </h1>
        <h1> Elizabeth Tse</h1>
      </div>
    </div>
  );
}

function AboutMe() {
 return(
  <div className="h-screen">
          <div>Ticker</div>
          About me
        </div>
 );
}
