"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";
import { carouselItems } from "@/constants";
import Image from "next/image";

const Carousel = () => {
  const photoRef = useRef([]);
  const photoSpanRef = useRef([]);
  const photoDivRef = useRef([]);

  const [photoIndex, setPhotoIndex] = useState({
    isEnd: false,
    startPlay: false,
    photoId: 0,
    isLastPhoto: false,
  });

  const [loaded, setLoaded] = useState([]);
  const { isEnd, startPlay, photoId, isLastPhoto } = photoIndex;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * photoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
  }, [photoId]);

  useGSAP(() => {
    gsap.to("#photo", {
      scrollTrigger: {
        trigger: "#photo",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setPhotoIndex((prev) => ({
          ...prev,
          startPlay: true,
        }));
      },
    });
  }, [photoId, isEnd]);

  useEffect(() => {
    let currentProgress = 0;
    let span = photoSpanRef.current;

    if (span[photoId]) {
      let anim = gsap.to(span[photoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (currentProgress !== progress) {
            currentProgress = progress;

            gsap.to(photoDivRef.current[photoId], {
              width:
                window.innerWidth < 760
                  ? "10vw" // mobile
                  : window.innerWidth < 1200
                  ? "10vw" // tablet
                  : "4vw", // laptop
            });
            gsap.to(span[photoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          gsap.to(photoDivRef.current[photoId], {
            width: '12px',
          });
          gsap.to(span[photoId], {
            backgroundColor: '#f5f5f5',
          });
        },
      });
      if (photoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        if (photoRef.current[photoId] && photoRef.current[photoId].currentTime != null) {
          anim.progress(
            photoRef.current[photoId].currentTime /
            carouselItems[photoId].duration
          );
        }
      };

      gsap.ticker.add(animUpdate);
    }
  }, [photoId, startPlay]);

  useEffect(() => {
    if (loaded.length > 10 && photoRef.current[photoId]) {
      photoRef.current[photoId].play();
    }
  }, [loaded, photoId, startPlay]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prev) => {
        const nextPhotoId = (prev.photoId + 1) % carouselItems.length;
        return {
          ...prev,
          photoId: nextPhotoId,
          isEnd: nextPhotoId === 0,
        };
      });
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const handleLoaded = (i, e) => setLoaded((prev) => [...prev, e]);

  return (
    <div className="flex items-center  overflow-x-hidden">
      {carouselItems.map((item, i) => (
        <div id="slider" className="sm:pr-20 pr-10 " key={i}>
          <div className="photo-carousel_container ">
            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
              <Image 
                src={item.imgurl}
                width={1000}
                height={1000}
                onLoad={(e) => handleLoaded(i, e)}
                ref={(el) => (photoRef.current[i] = el)}
                id="photo"
                alt={item.title}
                priority={true}
              />
            </div>
          </div>
        </div>
      ))}
    
    </div>
  );
};

export default Carousel;
