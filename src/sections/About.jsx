import { useRef } from "react";
import { about, experience, story } from "../data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".about-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });

    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });
  });

  return (
    <section
      className="flex min-h-screen code items-center justify-center"
      id="about"
      ref={sectionRef}
    >
      <div className="flex flex-col h-[70vh] py-4 w-full items-center gap-4 mx-8 max-sm:mx-8 justify-center rounded-3xl backdrop-blur-sm  dark:text-black text-white bg-black/70 dark:bg-white/30 transition-all duration-500 max-sm:flex-col max-sm:gap-2 max-2xl:gap-2 about-text">
        <p className="text-sm">get to know</p>
        <h1 className="text-6xl py-1 font-bold max-sm:text-xl max-2xl:text-2xl ">
          About Me
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-col w-full text-center  mx-8 ">
            <div className="flex flex-col gap-8 justify-center pt-2 pb-2">
              <div className=" grid grid-cols-2 gap-20 max-sm:gap-2  max-sm:text-xs max-sm:flex-col max-sm:flex px-4 max-sm:px-0 ">
                <div
                  className="border-2 border-solid border-slate-600  rounded-2xl p-2 flex flex-col items-center justify-center"
                  ref={project1Ref}
                >
                  <h1 className="font-bold">Experience </h1>
                  {experience.map((freelance) => (
                    <a
                      key={freelance.id}
                      href={freelance.web}
                      target="_blanck"
                      rel="noreferrer"
                      className="hover:text-purple-500"
                    >
                      {freelance.name}
                    </a>
                  ))}
                </div>
                <div
                  className="border-2 border-solid border-slate-600 rounded-2xl p-2"
                  ref={project2Ref}
                >
                  <h1 className="font-bold">Education</h1>
                  {about.map((studies) => (
                    <span
                      key={studies.id}
                      className="flex flex-col items-center"
                    >
                      <ul className="flex flex-row gap-2 max-sm:gap-1 text-[0.7rem]">
                        {studies.year}
                        <li>{studies.study}</li>
                      </ul>
                    </span>
                  ))}
                </div>
              </div>
              <div className=" max-sm:text-xs max-2xl:text-xs px-4 break-words max-sm:px-2">
                {story.map((storylife) => (
                  <h2 key={storylife.id}>{storylife.briefstory}</h2>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

/*max-sm:hidden  max-2xl:hidden*/
