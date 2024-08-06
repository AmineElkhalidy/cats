import { AiOutlineCheck } from "react-icons/ai";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/pages/Hero";
import TokenomicsStats from "@/components/pages/TokenomicsStats";
import clsx from "clsx";

const Frame: NextPage = () => {
  return (
    <div className="relative bg-gray-200 w-full h-full overflow-hidden text-left  text-white font-obit">
      <HeroSection />

      {/*============= ABOUT =============== */}
      <section className="max-w-screen-xl m-auto py-7  mt-8 sm:mt-32 overflow-hidden px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4">
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              viewport={{ once: true }}
              className="font-obit text-white text-6xl sm:text-8xl font-extrabold mb-8 text-center sm:text-left"
            >
              <span className=" text-yellow-200 text-9xl sm:text-181xl">A</span>
              BOUT
            </motion.h2>
            <p className="text-gray-500 text-sm md:text-lg font-poppins">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been the industry's standard dummy text
              ever since ths when an unknown printer took a galley of type and
              scrambled it to make a type specimen book It has survived not only
              five centuries but also the leap into electronic typesetting.
            </p>
            <br />
            <p className="text-gray-500 text-sm md:text-lg font-poppins">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been the industry's standard dummy text
              ever since ths when an unknown printer took a galley of type and
              scrambled it to make a type specimen book It has survived not only
              five centuries but also the leap into electronic typesetting.
            </p>
          </div>
          <div className="flex justify-center items-center md:gap-8 flex-wrap md:flex-nowrap w-full">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <Image
                src="/vector.svg"
                alt="Arrow"
                className="w-full"
                width={500}
                height={500}
              />
            </motion.div>
            <div className="text-center sm:text-end">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-3"
              >
                <h3 className="text-yellow-200 text-5xl md:text-7xl font-extrabold mb-2">
                  55+
                </h3>
                <p className="font-poppins text-gray-500 text-sm sm:text-base">
                  One line description
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-3"
              >
                <h3 className="text-yellow-200 text-5xl md:text-7xl font-extrabold mb-2">
                  18k
                </h3>
                <p className="font-poppins text-gray-500 text-sm sm:text-base">
                  One line description
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-yellow-200 text-5xl md:text-7xl font-extrabold mb-2">
                  4836
                </h3>
                <p className="font-poppins text-gray-500 text-sm sm:text-base">
                  One line description
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/*============= TOKENOMICS =============== */}
      <section className="max-w-screen-xl m-auto py-7 px-8">
        <h2 className="font-obit text-center text-white text-6xl sm:text-8xl font-extrabold mb-16">
          <span className=" text-yellow-200 text-9xl sm:text-181xl">T</span>
          okenomics
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
          >
            <TokenomicsStats />
          </motion.div>
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 }}
              viewport={{ once: true }}
              className="w-full bg-gray-400 flex justify-between items-center pr-8 rounded-lg"
            >
              <div className="flex gap-8 items-center">
                <div className="bg-yellow-200 w-[10px] h-10 block rounded-r-md"></div>
                <p className="font-sulphur-point">One line description</p>
              </div>
              <p className="font-obit text-2xl leading-3 text-yellow-200">
                40%
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="w-full bg-gray-400 flex justify-between items-center pr-8 rounded-lg"
            >
              <div className="flex gap-8 items-center">
                <div className="bg-turquoise w-[10px] h-10 block rounded-r-md"></div>
                <p className="font-sulphur-point">One line description</p>
              </div>
              <p className="font-obit text-2xl leading-3 text-turquoise">30%</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full bg-gray-400 flex justify-between items-center pr-8 rounded-lg"
            >
              <div className="flex gap-8 items-center">
                <div className="bg-goldenrod w-[10px] h-10 block rounded-r-md"></div>
                <p className="font-sulphur-point">One line description</p>
              </div>
              <p className="font-obit text-2xl leading-3 text-goldenrod">15%</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
              viewport={{ once: true }}
              className="w-full bg-gray-400 flex justify-between items-center pr-8 rounded-lg"
            >
              <div className="flex gap-8 items-center">
                <div className="bg-palevioletred w-[10px] h-10 block rounded-r-md"></div>
                <p className="font-sulphur-point">One line description</p>
              </div>
              <p className="font-obit text-2xl leading-3 text-palevioletred">
                10%
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full bg-gray-400 flex justify-between items-center pr-8 rounded-lg"
            >
              <div className="flex gap-8 items-center">
                <div className="bg-orangered w-[10px] h-10 block rounded-r-md"></div>
                <p className="font-sulphur-point">One line description</p>
              </div>
              <p className="font-obit text-2xl leading-3 text-orangered">5%</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/*============= ROADMAP =============== */}

      <section className="max-w-screen-xl mx-auto px-8">
        <h2 className="font-obit text-center sm:text-left text-white text-6xl sm:text-8xl font-extrabold mb-16">
          <span className=" text-yellow-200 text-9xl sm:text-181xl">R</span>
          oadmap
        </h2>

        <div className="relative md:-translate-y-60">
          <img
            className="w-60 mx-auto hidden md:block"
            alt=""
            src="/group-1000001364.svg"
          />

          {/* ============= STEP 1 ============= */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="block md:inline-block border border-solid border-yellow-200 rounded-2xl p-5 pt-0 relative md:absolute md:-top-2 md:right-16 mb-4"
          >
            <div className="w-32 h-[1px] border-t border-dashed border-t-yellow-200 hidden md:block absolute top-12 -left-4 -translate-x-full" />
            <h1 className="uppercase font-obit text-white text-4xl">Step 1</h1>

            {Array(4)
              .fill("")
              .map((_, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="rounded-full box-border w-6 h-6 border border-dashed border-yellow-300 leading-[0] flex justify-center items-center">
                    <AiOutlineCheck className="text-yellow-200" />
                  </div>
                  <p className="text-gray-500 font-sulphur-point leading-3">
                    One line description one line description
                  </p>
                </div>
              ))}
          </motion.div>

          {/* ============= STEP 2 ============= */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.25 }}
            className="block md:inline-block border border-solid border-yellow-200 rounded-2xl p-5 pt-0 relative md:absolute md:top-64 md:left-16 mb-4"
          >
            <div className=" w-32 h-[1px] border-t border-dashed border-t-yellow-200 hidden md:block absolute top-12 -right-4 translate-x-full" />
            <h1 className="uppercase font-obit text-white text-4xl">Step 2</h1>

            {Array(4)
              .fill("")
              .map((_, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="rounded-full box-border w-6 h-6 border border-dashed border-yellow-300 leading-[0] flex justify-center items-center">
                    <AiOutlineCheck className="text-yellow-200" />
                  </div>
                  <p className="text-gray-500 font-sulphur-point leading-3">
                    One line description one line description
                  </p>
                </div>
              ))}
          </motion.div>

          {/* ============= STEP 3 ============= */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.35 }}
            className="block md:inline-block border border-solid border-yellow-200 rounded-2xl p-5 pt-0 relative md:absolute md:top-96 md:right-32 mb-4"
          >
            <div className="w-32 h-[1px] border-t border-dashed border-t-yellow-200 hidden md:block absolute top-12 -left-4 -translate-x-full" />
            <h1 className="uppercase font-obit text-white text-4xl">Step 3</h1>

            {Array(4)
              .fill("")
              .map((_, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="rounded-full box-border w-6 h-6 border border-dashed border-yellow-300 leading-[0] flex justify-center items-center">
                    <AiOutlineCheck className="text-yellow-200" />
                  </div>
                  <p className="text-gray-500 font-sulphur-point leading-3">
                    One line description one line description
                  </p>
                </div>
              ))}
          </motion.div>

          {/* ============= STEP 4 ============= */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.45 }}
            className="block md:inline-block border border-solid border-yellow-200 rounded-2xl p-5 pt-0 relative md:absolute md:top-[650px] md:left-32"
          >
            <div className=" w-32 h-[1px] border-t border-dashed border-t-yellow-200 hidden md:block absolute top-12 -right-4 translate-x-full" />
            <h1 className="uppercase font-obit text-white text-4xl">Step 4</h1>

            {Array(4)
              .fill("")
              .map((_, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="rounded-full box-border w-6 h-6 border border-dashed border-yellow-300 leading-[0] flex justify-center items-center">
                    <AiOutlineCheck className="text-yellow-200" />
                  </div>
                  <p className="text-gray-500 font-sulphur-point leading-3">
                    One line description one line description
                  </p>
                </div>
              ))}
          </motion.div>
        </div>
      </section>

      {/*============= TEAM =============== */}
      <motion.section
        initial={{ scale: 0.85, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5, delay: 0.45 }}
        viewport={{ once: true }}
        className="container m-auto py-7"
      >
        <h2 className="font-obit text-center text-white text-6xl sm:text-8xl font-extrabold mb-16">
          <span className=" text-yellow-200 text-9xl sm:text-181xl">O</span>
          ur Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center py-12">
          <div className="relative">
            <img src="/6800-2-04-1@2x.png" alt="" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 text-center p-2 text-white text-lg font-bold  rounded-t-none rounded-b-lg bg-gray-600 backdrop-blur">
              <h3 className="leading-3 font-obit">MICHELE SMITH</h3>
              <h4 className="leading-3 font-sulphur-point">CEO/Founder</h4>
            </div>
          </div>

          <div className="relative">
            <img src="/7100-4-10--1@2x.png" alt="" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 text-center p-2 text-white text-lg font-bold  rounded-t-none rounded-b-lg bg-gray-600 backdrop-blur">
              <h3 className="leading-3 font-obit">MICHELE SMITH</h3>
              <h4 className="leading-3 font-sulphur-point">CEO/Founder</h4>
            </div>
          </div>

          <div className="relative">
            <img src="/2170-1@2x.png" alt="" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 text-center p-2 text-white text-lg font-bold  rounded-t-none rounded-b-lg bg-gray-600 backdrop-blur">
              <h3 className="leading-3 font-obit">MICHELE SMITH</h3>
              <h4 className="leading-3 font-sulphur-point">CEO/Founder</h4>
            </div>
          </div>

          <div className="relative">
            <img src="/2210-1@2x.png" alt="" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 text-center p-2 text-white text-lg font-bold  rounded-t-none rounded-b-lg bg-gray-600 backdrop-blur">
              <h3 className="leading-3 font-obit">MICHELE SMITH</h3>
              <h4 className="leading-3 font-sulphur-point">CEO/Founder</h4>
            </div>
          </div>
        </div>
      </motion.section>

      {/*============= FOOTER =============== */}
      <footer className="border-y border-solid border-gray-700 p-10">
        <div className=" mx-auto max-w-screen-xl flex justify-between items-center font-poppins">
          <Link href="/" className=" text-yellow-200 text-4xl no-underline">
            <span className="font-striker">LOGO</span>
          </Link>

          <p className="text-gray-800">All rights reserved</p>

          <button
            className={clsx(
              "hidden md:block bg-transparent px-16 py-5 relative z-10 bg-yellow-200 text-gray-100 font-semibold rounded-md",
              "before:content-[''] before:absolute before:w-1/2 before:inset-y-0 before:-left-4 before:skew-x-[25deg] before:bg-yellow-200 before:-z-10 before:rounded-lg",
              "after:content-[''] after:absolute after:w-1/2 after:inset-y-0 after:-right-4 after:-skew-x-[25deg] after:bg-yellow-200 after:-z-10 after:rounded-lg",
              "shadow-yellow hover:cursor-pointer"
            )}
          >
            BUY
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Frame;
