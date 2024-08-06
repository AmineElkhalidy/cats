import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Header from "@/components/layouts/Header";
import TokenMarquee from "@/components/pages/TokenMarquee";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const catImg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <motion.div className="relative text-center">
      <div
        ref={ref}
        id="home"
        className="overflow-hidden h-full box-content relative min-h-[120vh]"
      >
        <Header />

        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            background: "url('/image-1-1@2x.png') no-repeat center center",
            backgroundSize: "cover",
            y: catImg,
          }}
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
          viewport={{ once: true }}
          style={{ y: textY }}
          className="font-striker uppercase inline-block max-w-[15ch] text-5xl sm:text-7xl sm:leading-[200%]"
        >
          The most famous <span className="text-yellow-300">token</span> in the
          world
        </motion.h1>

        <TokenMarquee />

        <TokenMarquee />
      </div>

      <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 z-50">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-full max-w-3xl transform object-cover  overflow-visible"
          alt=""
          src="/image-1-2@2x.png"
        />
      </div>
    </motion.div>
  );
}
