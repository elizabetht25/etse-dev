import { clsx, type ClassValue } from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
gsap.registerPlugin(ScrollTrigger);
type AnimationProps= gsap.TweenVars;

export function animateOnScroll(target: string | Element, props: AnimationProps):void {
  gsap.to(target, {
    ...props,
    scrollTrigger:{
      trigger: target, 
      start: '50% 50%', 
      markers: true, 
      scrub: true, 
    }
  })
}