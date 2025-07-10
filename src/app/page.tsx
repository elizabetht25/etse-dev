"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SmoothScroll from "@/lib/SmoothScroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

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
      x: "-=200px",
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
  useGSAP(() => {
    const headerSplit = SplitText.create(".aboutHeader", {
      type: "chars",
    });
    //option:1
    const paraSplit = SplitText.create(".para", {
      type: "words, lines",

      mask: "lines",
      linesClass: "paragraph-line",
    });

    gsap.from(headerSplit.chars, {
      yPercent: 300,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".aboutHeader",
        start: "top 90%",
        markers: true,
      },
    });
    //option 1 fade up paragraph
    gsap.from(paraSplit.words, {
      yPercent: 200,
      ease: "power1.in",
      duration: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".para",
        start: "top 60%",
        markers: true,
      },
    });
    //option 2 reveal paragraph
    // document.querySelectorAll(".para").forEach((e) => {
    //   const paraSplit = SplitText.create(e, {
    //     type: "words",
    //   });
    //   gsap.fromTo(
    //     paraSplit.words,
    //     { opacity: 0.5 },
    //     {
    //       opacity: 1,
    //       // ease: 'power1.in',
    //       // duration: 0.3,
    //       stagger: 0.05,
    //       scrollTrigger: {
    //         trigger: e,
    //         start: " top center",
    //         end: "bottom center",
    //         scrub: true,
    //         invalidateOnRefresh: true,
    //         markers: true,
    //       },
    //     }
    //   );
    // });
  });
  return (
    <div className="h-screen flex border ">
      <div className="flex flex-col border">
        <div className="border p-50 w-screen-1/2 h-[200]">
          {" "}
          <div className="aboutHeader flex justify-center overflow-hidden text-6xl font-bold">
            <p>About me</p>
          </div>
          <div className="border para items-center text-7xl h-[600] p-15 pt-20 overflow-hidden">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function ExperienceSlider() {}
