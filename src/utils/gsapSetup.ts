import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Creates smooth parallax movement on target element relative to trigger scroll container
 * @param target The element (image/layer) to translate
 * @param trigger The container bounding element for ScrollTrigger
 * @param yPercent Number indicating vertical parallax range (e.g. -15 to +15)
 */
export function setupParallax(
  target: HTMLElement | string,
  trigger?: HTMLElement | string,
  yPercent: number = 18
): gsap.core.Tween | null {
  if (isReducedMotion()) return null;

  return gsap.fromTo(
    target,
    { yPercent: -yPercent },
    {
      yPercent: yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger || target,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    }
  );
}

/**
 * Creates staggered text or card reveal animation when scrolled into view
 */
export function setupStaggeredReveal(
  targets: HTMLElement[] | string,
  trigger?: HTMLElement | string,
  options?: {
    yOffset?: number;
    stagger?: number;
    duration?: number;
    start?: string;
  }
): gsap.core.Tween | null {
  if (isReducedMotion()) return null;

  const yOffset = options?.yOffset ?? 32;
  const stagger = options?.stagger ?? 0.12;
  const duration = options?.duration ?? 0.85;
  const start = options?.start ?? 'top 85%';

  return gsap.fromTo(
    targets,
    {
      y: yOffset,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: duration,
      stagger: stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || (Array.isArray(targets) ? targets[0] : targets),
        start: start,
        toggleActions: 'play none none none',
        once: true,
      },
    }
  );
}
