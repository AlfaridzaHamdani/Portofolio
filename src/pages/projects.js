import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/portofolio-html-css.jpg";
import project2 from "../../public/images/projects/TechSprint.jpg";
import project3 from "../../public/images/projects/password-generator.jpg";
import project4 from "../../public/images/projects/KucingCariRumah.png";
import project5 from "../../public/images/projects/HooBank.jpg";
import project6 from "../../public/images/projects/Flowy.jpg";
import project7 from "../../public/images/projects/HarvestTable.jpg";
import seku from "../../public/images/projects/Seku.jpg";

import Image from "next/image";
import { color, motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-1lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark  xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light sm:px-4 sm:text-base"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl rounded-bl-4xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-2">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:etxt-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg font-semibold underline hover:no-underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export const projects = () => {
  return (
    <>
      <Head>
        <title>Alfaridza | Projects Page</title>
        <meta name="description" content="any" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="My Projects"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!4xl "
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Harvest Table"}
                img={project7}
                summary={""}
                link={"https://alfaridzahamdani.github.io/HarvestTable/"}
                github={"https://github.com/AlfaridzaHamdani/HarvestTable"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"TechSprint"}
                img={project2}
                link={"https://alfaridzahamdani.github.io/TechSprint/"}
                github={"https://github.com/AlfaridzaHamdani/TechSprint"}
                type={"Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Password Generator"}
                img={project3}
                link={"https://alfaridzahamdani.github.io/password-generator/"}
                github={
                  "https://github.com/AlfaridzaHamdani/password-generator"
                }
                type={"Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Kucing Cari Rumah"}
                img={project4}
                link={"https://alfaridzahamdani.github.io/KucingCariRumah/"}
                github={"https://github.com/AlfaridzaHamdani/KucingCariRumah"}
                type={"Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Hoo Bank"}
                img={project5}
                link={"https://alfaridzahamdani.github.io/project-HooBank/"}
                github={"https://github.com/AlfaridzaHamdani/project-HooBank"}
                type={"Project"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Seku"}
                img={seku}
                summary={""}
                link={"https://alfaridzahamdani.github.io/Seku/"}
                github={"https://github.com/AlfaridzaHamdani/Seku"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"HTML CSS Portofolio"}
                img={project1}
                link={"https://alfaridzahamdani.github.io/Portofolio-Basic/"}
                github={"https://github.com/AlfaridzaHamdani/Portofolio-Basic"}
                type={"Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Flowy"}
                img={project6}
                link={"https://alfaridzahamdani.github.io/Flowy/"}
                github={"https://github.com/AlfaridzaHamdani/Flowy"}
                type={"Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
