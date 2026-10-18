"use client";
import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";

export default function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);
  const text = useTransform(v, (n) => Math.round(n).toLocaleString() + suffix);
  useEffect(() => { if (inView) animate(v, to, { duration: 2.2, ease: "easeOut" }); }, [inView]);
  return <motion.span ref={ref}>{text}</motion.span>;
}
