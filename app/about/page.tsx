import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { navItems } from "@/data";
import React from "react";

const page = () => {
  return (
    <>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <header className="fixed top-2 left-3 p-5 ">
          <a href="/">
            <button className="bg-gray-600 px-3 py-1 text-white rounded-sm fixed">
              Go to Home
            </button>
          </a>
        </header>
        <div className="max-w-7xl w-full mt-5">
          <main>
            <TextGenerateEffect
              words="About me"
              className=" justify-start  text-[40px] md:text-5xl lg:text-6xl"
            />
            <TextGenerateEffect
              words="a small documetation"
              className=" justify-start text-[20px] md:text-4xl lg:text-xl -mt-5"
            />

            <div className=" mt-20">
              <h1 className=" justify-start text-[30px] md:text-5xl lg:text-4xl font-bold mb-2 ">
                My <span className="text-purple">Name</span>:
              </h1>
              <p className="justify-start text-[30px] md:text-2xl lg:text-4xl mb-12  ">
                Shaik Junaid Ahmad
              </p>

              <h1 className=" justify-start text-[30px] md:text-5xl lg:text-4xl font-bold mb-2 ">
                My <span className="text-purple">Professional Summary</span>:
              </h1>
              <p className="justify-end tracking-tight text-[30px] md:text-xl lg:text-2xl mb-12  ">
                &apos;Tech enthusiast specializing in front-end and full-stack
                development using modern technologies like React.js and Next.js.
                Known for creating efficient, user-friendly interfaces and
                delivering high-quality code.&apos;
              </p>
              <h1 className=" justify-start text-[30px] md:text-5xl lg:text-4xl font-bold mb-2 ">
                My <span className="text-purple">Skills</span>:
              </h1>
              <span className="lg:text-xl">Frontend:</span>
              <ul className="justify-end text-[30px] md:text-xl lg:text-2xl mb-12 list-disc ">
                <li>
                  <span className="font-bold  text-blue-200">
                    Programming Languages
                  </span>
                  : JavaScript.
                </li>
                <li>
                  <span className="font-bold  text-blue-200">
                    Frameworks & Libraries
                  </span>
                  : React.js, Next.js, Node.js, ReactRouter, ReactQuery, Redux,
                  and so on.
                </li>
                <li>
                  {" "}
                  <span className="font-bold text-blue-200">
                    Tools & Platforms
                  </span>
                  : Git, Github, Vercel..
                </li>
              </ul>
              <h1 className=" justify-start text-[30px] md:text-5xl lg:text-4xl font-bold mb-2 ">
                My <span className="text-purple">Experience</span>:
              </h1>
              <p className="justify-end tracking-tight text-[30px] md:text-xl lg:text-2xl mb-12  ">
                After working extensively with React, I have developed a solid
                understanding of its core concepts and philosophies. Recently,
                I&apos;ve been enhancing my skills by creating and modifying
                projects, which has deepened my knowledge and practical
                experience. I feel confident in my abilities and believe
                I&apos;m well-prepared to start applying for positions in the
                industry.
              </p>
            </div>
            <div id="contact" className="mt-40">
              {
                "---------------------------------------------------------------------------"
              }
            </div>

            <div className="mt-10 mb-96">
              <h1 className=" justify-start  text-[40px] md:text-5xl lg:text-6xl ">
                <span>
                  <TextGenerateEffect
                    words="Contact Information"
                    className=""
                  />
                </span>
              </h1>
              <h1 className=" justify-start text-[30px] md:text-5xl lg:text-4xl mt-1  mb-2 inline-block ">
                My <span className="text-purple font-bold">Email</span>:{" "}
                <p className="inline-block justify-center">
                  Aj215210@gmail.com
                </p>
              </h1>{" "}
              <br />
              <h1 className=" justify-start text-[30px] md:text-5xl lg:text-4xl mt-5 mb-2 inline-block ">
                My <span className="text-purple font-bold">Github</span>:{" "}
                <p className="inline-block justify-center mb-96">
                  <a href="https://github.com/junedgit" target="_blank">
                    JunedGit
                  </a>
                </p>
              </h1>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default page;
