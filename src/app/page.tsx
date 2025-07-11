"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SmoothScroll from "@/lib/SmoothScroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, Mail } from "lucide-react";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  useEffect(() => {
    SmoothScroll();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HeroSection />
        <HorizontalWrapper />
        <ExperienceTitle />
        <Footer />
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
      className="py-100 relative flex h-dvh overflow-hidden bg-[#8539bf] bg-linear-to-t from-[#C95FCB]"
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
    <div className="h-screen flex  ">
      <div className="flex flex-col ">
        <div className=" p-50 w-screen h-[200]">
          {" "}
          <div className="aboutHeader flex justify-center overflow-hidden text-6xl font-bold">
            <p>About me</p>
          </div>
          <div className=" para items-center text-7xl h-[600] p-15 pt-20 overflow-hidden">
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

function Languages() {
  return (
    <div>
      {/* <div className="grid grid-cols-2 gap-20 border overflow-auto h-1/2">
        <div>
          <Image src="/typescript.png" alt="" height={100} width={100} />
          <Image src="/tailwindcsslogo.svg" alt="" height={100} width={100} />
          <Image src="/prisma.png" alt="" width={100} height={100} />
          <Image src="/nextjslogo.png" alt="" width={100} height={100} />
        </div>
        <div className="pt-10 grid grid-cols-1 gap-20 overflow-y-hidden border">
          <Image src="/java.png" alt="" width={100} height={100} />
          <Image src="/html-5.png" alt="" width={100} height={100} />
          <Image src="/gsaplogo.png" alt="" width={100} height={100} />
          <Image src="/c-sharp.png" alt="" width={100} height={100} />
        </div>
      </div> */}
       <div className="grid grid-cols-2 gap-20 border overflow-auto h-1/2">
          <Image className='plane1' src="/typescript.png" alt="" height={100} width={100} />
          <Image className='plane1'src="/tailwindcsslogo.svg" alt="" height={100} width={100} />
          <Image className='plane1'src="/prisma.png" alt="" width={100} height={100} />
          <Image className='plane2'src="/nextjslogo.png" alt="" width={100} height={100} />
          <Image className='plane2'src="/java.png" alt="" width={100} height={100} />
          <Image className='plane2'src="/html-5.png" alt="" width={100} height={100} />
          <Image className='plane3'src="/gsaplogo.png" alt="" width={100} height={100} />
          <Image className='plane'src="/c-sharp.png" alt="" width={100} height={100} />
      </div>
    </div>
  );
}

function HorizontalWrapper() {
  useGSAP(() => {
    const hWrapper = document.querySelector(".hWrapper");

    const scrollAmount = () => {
      if (hWrapper != null) {
        const hWidth = hWrapper.scrollWidth;
        return -(hWidth - window.innerWidth);
      } else {
        return 1;
      }
    };

    const tween = gsap.to(hWrapper, {
      x: scrollAmount,
      duration: 3,
      ease: "none",
    });
    ScrollTrigger.create({
      trigger: ".hWrapper",
      start: "top top",
      end: () => `+=${scrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });
  });
  return (
    <div className=" border hWrapper flex overflow-hidden w-[200vw] ">
      <AboutMe />
      <ExperienceSlider />
      {/* <Languages /> */}
    </div>
  );
}
function ExperienceSlider() {
  return (
    <div className="flex justify-center items-center gap-50 px-50">
      <Card>
        <CardContent>
          <div>
            <Image
              className="rounded-xl"
              src="/PFimg.png"
              alt="planet finder"
              height={500}
              width={500}
            />
          </div>
        </CardContent>
        <CardFooter className="grid grid-col relative">
          <CardTitle>Planet Finder</CardTitle>
          <div className="py-5 pb-20">
            <p>An interactive game designed to teach pathfinding algorithms.</p>
            <Button className="bottom-0 right-0 absolute mx-5">
              Learn more
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <div>
            {" "}
            <Image
              className="rounded-xl"
              src="/dogerest.png"
              alt="dogerest"
              height={600}
              width={500}
            />
          </div>
        </CardContent>
        <CardFooter className="grid grid-col relative">
          <CardTitle>Pinterest Front end Clone</CardTitle>
          <p className="py-5 pb-20">Pinterest clone for dog images.</p>
          <Button className="bottom-0 right-0 absolute mx-5">Learn more</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function ExperienceTitle() {
  useGSAP (() => {
const paraSplit = SplitText.create(".para", {
      type: "words, lines",

      mask: "lines",
      linesClass: "paragraph-line",
    });

     gsap.from(paraSplit.words, {
      yPercent: 200,
      ease: "power1.in",
      duration: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".para",
        start: "top 60%",
      },
    });
  });
  return (
    <div className="h-dvh border-red-500 border-2 bg-linear-to-t from-[#6F5FCB] flex">
      <div className="grid grid-col h-dvh w-1/2 border py-50 pl-50">
        <h1 className="font-extrabold text-6xl"> My Experience</h1>
        <p className="text-5xl para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex.
        </p>
        <div>
          <Button variant={"secondary"}>My CV</Button>
        </div>
      </div>
      <div className="flex items-center border-blue-500">
        {/* <Languages /> */}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#5f379e] p-10">
      <div className="flex gap-5">
        <a href="https://github.com/elizabetht25/" className="">
          <Image src="/ghlogo.png" alt="githublogo" width={40} height={40} />
        </a>
        <a href="">
          <Image src="/lilogo.png" alt="linkedinlogo" width={40} height={40} />
        </a>
        <Image src="/maillogo.png" alt="mail" width={40} height={40} />
      </div>
      <div></div>
    </div>
  );
}
