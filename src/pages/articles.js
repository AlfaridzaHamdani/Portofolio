import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target={"_blank"}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: 0.2 }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-80 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark dark:bg-dark dark:text-light dark:border-light border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full m-4 border bg-light border-solid border-dark rounded-2xl z-0 dark:border-light">
      <div className="absolute w-[103%] h-[104%] -right-5 -z-10 bg-dark rounded-[2rem] rounded-br-3xl dark:bg-light" />
      <div className="bg-light h-[100%] w-[100%] p-7 rounded-2xl dark:bg-dark">
        <Link
          href={link}
          target="_blank"
          className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <Link href={link} target="_blank">
          <h2 className="capitalize text-xl font-bold mt-4 my-2 hover:underline xs:text-lg">
            {title}
          </h2>
        </Link>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </div>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Alfaridza | Articles Page</title>
        <meta name="description" content="any" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words can change the world!"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!4xl"
          />
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-y-16">
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
              link={"/"}
              img={article}
            />
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
              link={"/"}
              img={article}
            />
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
              link={"/"}
              img={article}
            />
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
              link={"/"}
              img={article}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="w-full">
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"January 22, 2022"}
              link={"/"}
              img={article}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"January 22, 2022"}
              link={"/"}
              img={article}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"January 22, 2022"}
              link={"/"}
              img={article}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"January 22, 2022"}
              link={"/"}
              img={article}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"January 22, 2022"}
              link={"/"}
              img={article}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"January 22, 2022"}
              link={"/"}
              img={article}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"January 22, 2022"}
              link={"/"}
              img={article}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
