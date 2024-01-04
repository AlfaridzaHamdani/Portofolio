import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/pict.png";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Alfaridza Portofolio"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="md:pt-16 sm:pt-8 -translate-y-16 md:translate-y-0">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/3 md:w-1/2">
              <Image
                src={profilePic}
                alt="Alfaridza Profile Picture"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={"Making your dream website come true."}
                className="text-6xl text-left xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                {
                  "Hello, Im Alfaridza, a Web Developer with 1+ year of experience. I'am committed to bringing your dream website to life with the creativity and technical expertise I possess. Lets work together to make each of your projects an exceptional online experience!"
                }
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <a
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download
                >
                  Resume <span className="w-6 ml-1">&#8599;</span>
                </a>
                <a
                  href="mailto:alfaridzah@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="right-8 bottom-8 top-auto left-auto inline-block w-24 md:hidden absolute translate-y-20">
          <Image src={lightBulb} alt="Alfaridza" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
