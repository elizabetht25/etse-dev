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
      // id="smooth-content"
      className=" relative flex align-middle h-dvh pt-10  w-dvw overflow-hidden bg-[#8539bf] bg-linear-to-t from-[#C95FCB]"
    >
      <div className="  stagger-bg top-0 right-0 absolute w-3/5">
        <Image
          className="top-0 right-0 my-5 align-middle"
          src={"/sun.svg"}
          alt="sun"
          width={400}
          height={200}
        />
      </div>
      <div className="">
        <Image
          className="absolute bottom-0 stagger-bg"
          src={"/mgbuildings.svg"}
          alt="middleground buildings"
          width={2000}
          height={500}
        />
        <Image
          className="absolute bottom-0 stagger-bg"
          src={"/fgbuildings1.svg"}
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
      <div></div>

      <div
        ref={textRef}
        className="w-dvw flex flex-col justify-center z-10
        text-2xl px-5
        lg:text-7xl lg:px-15
        md:text-4xl md:px-10
        "
      >
        <h1 className="font-serif">Hi, I am </h1>
        <h1 className="font-sans"> Elizabeth Tse</h1>
      </div>

      <div
        className="ticker-wrap-1 absolute bottom-0 py-1 w-full overflow-hidden
      xl:py-15
      lg:py-10
      md:py-5
      sm:py-3
      
      "
      >
        <div
          ref={text1slider}
          className="text-2xl font-extrabold flex whitespace-nowrap
          lg:text-5xl
          md:text-4xl
          sm:text-3xl
          "
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
    <div className="h-screen flex flex-col ">
      <div
        className="  w-screen h-[200]
        xl:p-50
        lg:p-30
        md:p-15
        sm:p-10
        "
      >
        {" "}
        <div
          className="aboutHeader flex justify-center overflow-hidden font-bold
          xl:text-6xl
          lg:text-5xl
          md:text-5x
          sm:text-3xl
          text-2xl
          "
        >
          <p>About me</p>
        </div>
        <div
          className=" para h-[600] overflow-hidden text-clip text-center
          xl:text-7xl xl:p-15 xl:pt-20
          lg:text-6xl lg:p-13 lg:pt-15
          md:text-4xl md:p-10 md:pt-10
          sm:text-4xl sm:p-8 sm:pt-5
          text-3xl p-5 pt-3
          "
        >
          <p>
            I am a junior software engineer studying at the University of
            Birmingham with an interest in exploring different technologies and
            concepts. By deepening my understanding I aim to expand my skill set
            and identify my passion.
          </p>
        </div>
      </div>
    </div>
  );
}

// function Languages() {
//   useGSAP(() => {

//    gsap.to(
//     '.logos', {
//       y:400
//     }
//    )
//   });

//   });
//   return (
//     <div>
//       <div className="gap-20 border overflow-auto h-[500] p-20">
//         <div className="grid grid-cols-4 gap-20 logos">
//           <Image src="/typescript.png" alt="" height={100} width={100} />
//           <Image src="/tailwindcsslogo.svg" alt="" height={100} width={100} />
//           <Image src="/prisma.png" alt="" width={100} height={100} />
//           <Image src="/nextjslogo.png" alt="" width={100} height={100} />
//           <Image src="/java.png" alt="" width={100} height={100} />
//           <Image src="/html-5.png" alt="" width={100} height={100} />
//           <Image src="/gsaplogo.png" alt="" width={100} height={100} />
//           <Image src="/c-sharp.png" alt="" width={100} height={100} />
//         </div>
//       </div>
//     </div>
//   );
// }

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
    <div className=" hWrapper flex overflow-hidden w-[200vw] ">
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
  useGSAP(() => {
    const paraSplit = SplitText.create(".para2", {
      type: "words, lines",
      mask: "lines",
      linesClass: "paragraph-line",
    });

    const logos = document.querySelectorAll("[data-speed]");
    logos.forEach((e) => {
      const speed = parseFloat(e.getAttribute("data-speed") ?? "1");

      gsap.to(e, {
        y: () => -(window.innerHeight * speed),
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".exp",
          start: "50% 50%",
          scrub: true,
        },
      });
    });
    gsap.from(".button", {
      y: 400,
      ease: "power2.in",
      duration: 1,
      scrollTrigger: {
        trigger: ".logos",
        start: "50% 60%",

        // markers: true,
      },
    });

    gsap.from(paraSplit.words, {
      yPercent: 200,
      ease: "power1.in",
      duration: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".logos",
        start: "top 80%",
        end: "top 30%",
        // pin: true,
        // markers: true,
      },
    });

    gsap.from(".exp", {
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".exp",
        pin: true,
        start: "50% 60%",
        end: "50% 10%",
        // markers: true,
      },
    });
    gsap.to;
  });
  return (
    <div className=" h-350  bg-linear-to-t from-[#6F5FCB] flex">
      <div className="grid grid-col w-1/2 py-50 pl-50 h-dvh exp">
        <h1 className="font-extrabold text-6xl"> My Experience</h1>
        <p
          className=" para2
         xl:text-5xl 
          lg:text-4 
          md:text-3xl 
          sm:text-2xl 
          text-xl
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex.
        </p>
        <div>
          <Button className="button" variant={"secondary"}>
            My CV
          </Button>
        </div>
      </div>
      <div className="relative w-1/2 flex justify-center">
        {/* <div className=" h-[800] p-20 border"> */}
        <div className="grid grid-cols-3 gap-20 logos absolute bottom-0 top-0 pt-50">
          <div className="grid gap-40" data-speed="clamp(1.5)">
            <Image src="/typescript.png" alt="" height={100} width={100} />
            <Image src="/tailwindcsslogo.svg" alt="" height={100} width={100} />
            <Image src="/prisma.png" alt="" width={100} height={100} />
          </div>
          <div className="grid gap-40" data-speed="clamp(4)">
            <Image src="/nextjslogo.png" alt="" width={100} height={100} />
            <Image src="/java.png" alt="" width={100} height={100} />
            <Image src="/html-5.png" alt="" width={100} height={100} />
          </div>
          <div className="grid gap-40" data-speed="clamp(2.8)">
            <Image src="/gsaplogo.png" alt="" width={100} height={100} />
            <Image src="/pythlogo.png" alt="" width={100} height={100} />
            <Image src="/js.png" alt="" width={100} height={100} />
          </div>
        </div>
        {/* </div> */}
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
