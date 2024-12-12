import { Terminal, Code, Coffee } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="py-12 flex justify-center items-center">
      <div className="container mx-auto px-4 mt-[10%]">
        <h2 className="text-3xl font-bold text-center mb-8 font-sans text-slate-200">
          About
        </h2>
        <div className="bg-white/5 shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <img
              src="/ender.png"
              alt="Juned Shaik"
              className="rounded-full w-20 h-20 mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold">Juned Shaik</h3>
              <p className="text-slate-300/90 font-bold">
                Full Stack Developer
              </p>
            </div>
          </div>
          <p className="text-slate-300 mb-4 text-sm font-semibold ">
            My journey began as a curious geek, who started tinkering a
            Raspberry Pi by Himself. Thats when I wrote first lines of code that
            runs a program to control io Fan speed of Pi. Started learing basics
            of Linux and how Computers & internet works. This is where I
            discovered JavaScript—a gateway that Pushed me into the world of Web
            Development. Now I am a Full Stack Developer, who loves to build and
            create things.
          </p>
          <div className="flex items-center space-x-4 text-slate-200/80 font-bold gap-4">
            <div className="flex items-center">
              <Terminal className="w-5 h-5 mr-2" />
              <span>Linux Enthusiast</span>
            </div>
            <div className="flex items-center">
              <Code className="w-5 h-5 mr-2" />
              <span>Full Stack</span>
            </div>
            <div className="flex items-center">
              <Coffee className="w-5 h-5 mr-2" />
              <span>Coffee Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
