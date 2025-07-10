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
  const fText1 = useRef(null);
  const sText1 = useRef(null);
  const fText2 = useRef(null);
  const sText2 = useRef(null);
  const text1slider = useRef(null);
  const text2slider = useRef(null);

  let xPercent = 0;
  let direction = -1;
  

  useEffect(() => {
    requestAnimationFrame(animation);

    gsap.to(text1slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
    // requestAnimationFrame(animation2);

    // gsap.to(text2slider.current, {
    //   scrollTrigger: {
    //     trigger: document.documentElement,
    //     start: 0,
    //     end: window.innerHeight,
    //     scrub: true,
    //     onUpdate: (e) => (direction = e.direction * -1),
    //   },
    //   x: "-=300px",
    // });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(fText1.current, { xPercent: xPercent });
    gsap.set(sText1.current, { xPercent: xPercent });
    
    xPercent += 0.1 * direction;

    // gsap.set(fText2.current, { xPercent: xPercent });
    // gsap.set(sText2.current, { xPercent: xPercent });

    // xPercent += 0.1 * direction*-1;
    requestAnimationFrame(animation);
  };

  // useEffect(() => {

  //   requestAnimationFrame(animation2);

  //   gsap.to(text2slider.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       start: 0,
  //       end: window.innerHeight,
  //       scrub: true,
  //       onUpdate: (e) => (direction = e.direction * -1),
  //     },
  //     x: "-=300px",
  //   });
  // }, [])

  // const animation2 = () => {
  //   if (xPercent <= -100) {
  //     xPercent = 0;
  //   }
  //   if (xPercent > 0) {
  //     xPercent = -100;
  //   }
  //   gsap.set(fText2.current, { xPercent: xPercent });
  //   gsap.set(sText2.current, { xPercent: xPercent });
  //   xPercent += 0.1 * direction*-1;
  //   // requestAnimationFrame(animation2);
  // };
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
    // document.body.style.overflow = "hidden";
    // setTimeout(() => {
    //   document.body.style.overflow = "auto";
    // }, 1000);
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

    // const marqueeWrap = document.querySelector('.ticker-wrap-1');
    // const spans = document.querySelectorAll('.ticktext');
    // gsap.set(spans[0], {xPercent: -50 });
    // gsap.set(spans[1], {xPercent: 0});

    // gsap.to(spans, {
    //   xPercent: '-=100',
    //   duration:5,
    //   ease:'none',
    //   repeat:-1,
    //   modifiers: {
    //     xPercent: gsap.utils.wrap([-50, 50])
    //   }
    // });
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

      <div
        ref={textRef}
        className="text-7xl px-30 flex flex-col absolute text-opacity-0"
      >
        <h1 className="font-sans-[Oxanium]">Hi, I am </h1>
        <h1> Elizabeth Tse</h1>
      </div>

      {/* <div className="ticker-wrap-1 absolute border bottom-0 py-5 w-full overflow-hidden">
        <div
          ref={text2slider}
          className="text-4xl font-extrabold flex whitespace-nowrap"
        >
          <span ref={fText2}>
            {" "}
            - Let's Dive In - Let's Dive In - Let's Dive In - Let's Dive In -
            Let's Dive In - Let's Dive In - Let's Dive in
          </span>
          <span ref={sText2} className="ticktext">
            {" "}
            - Let's Dive In - Let's Dive In - Let's Dive In - Let's Dive In -
            Let's Dive In - Let's Dive In - Let's Dive in
          </span>
        </div>
      </div> */}
      <div className="ticker-wrap-1 absolute bottom-0 py-15 w-full overflow-hidden">
        <div
          ref={text1slider}
          className="text-5xl font-extrabold flex whitespace-nowrap"
        >
          <span ref={fText1}>
            {" "}
            - Let's Dive In - Let's Dive In - Let's Dive In - Let's Dive In -
            Let's Dive In - Let's Dive In - Let's Dive in
          </span>
          <span ref={sText1} className="ticktext">
            {" "}
            - Let's Dive In - Let's Dive In - Let's Dive In - Let's Dive In -
            Let's Dive In - Let's Dive In - Let's Dive in
          </span>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="h-screen flex border">
      <div className="flex flex-col border"><div className="border text-4xl font-bold p-50 w-screen-1/2 h-[200]"> <div> About me </div><div className="border text-3xl h-[600] w-[600] p-15"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div></div></div> 
      </div>
  );
}
