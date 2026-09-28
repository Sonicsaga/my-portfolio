import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, isReducedMotion } from '../utils/gsapSetup';

export interface ScrollAnimationOptions {
  enableParallax?: boolean;
  enableStagger?: boolean;
  parallaxSpeed?: number;
  staggerDelay?: number;
  triggerStart?: string;
}

/**
 * React hook using gsap.context to safely attach ScrollTrigger parallax & staggered text reveals.
 * Automatically cleans up on unmount (ctx.revert()).
 */
export function useScrollAnimations<T extends HTMLElement = HTMLElement>(
  options: ScrollAnimationOptions = {}
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!containerRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      // 1. STAGGERED TEXT & CONTENT REVEALS
      if (options.enableStagger !== false) {
        // Group reveals (headers, badges, title words, paragraphs)
        const revealGroups = container.querySelectorAll<HTMLElement>('.reveal-group');
        revealGroups.forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>('.reveal-item, .reveal-text');
          if (items.length > 0) {
            gsap.fromTo(
              items,
              { y: 35, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.85,
                stagger: options.staggerDelay ?? 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: group,
                  start: options.triggerStart ?? 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          } else {
            gsap.fromTo(
              group,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: group,
                  start: options.triggerStart ?? 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        });

        // Individual reveal items outside groups
        const soloItems = container.querySelectorAll<HTMLElement>('.reveal-solo');
        soloItems.forEach((item) => {
          gsap.fromTo(
            item,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        // Staggered cards (projects, disciplines, achievements, gallery)
        const cardGrids = container.querySelectorAll<HTMLElement>('.reveal-cards-grid');
        cardGrids.forEach((grid) => {
          const cards = grid.querySelectorAll<HTMLElement>('.reveal-card');
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: grid,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        });
      }

      // 2. PARALLAX ON PROJECT IMAGES & VISUAL FRAMES
      if (options.enableParallax !== false) {
        const parallaxImages = container.querySelectorAll<HTMLElement>('.parallax-img');
        const speed = options.parallaxSpeed ?? 18;

        parallaxImages.forEach((img) => {
          const parent = img.closest<HTMLElement>('.parallax-container') || img.parentElement;
          if (parent) {
            gsap.fromTo(
              img,
              { yPercent: -speed },
              {
                yPercent: speed,
                ease: 'none',
                scrollTrigger: {
                  trigger: parent,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.2,
                },
              }
            );
          }
        });

        // Parallax background or decorative floating layers
        const parallaxLayers = container.querySelectorAll<HTMLElement>('.parallax-layer');
        parallaxLayers.forEach((layer) => {
          const layerSpeed = parseFloat(layer.getAttribute('data-parallax-speed') || '25');
          gsap.fromTo(
            layer,
            { yPercent: -layerSpeed },
            {
              yPercent: layerSpeed,
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
              },
            }
          );
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [options.enableParallax, options.enableStagger, options.parallaxSpeed, options.staggerDelay, options.triggerStart]);

  return containerRef;
}
