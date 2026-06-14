"use client";

import React from "react";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// ─── Star icon ────────────────────────────────────────────────────────────────

function StarIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 fill-[#82F413]" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// ─── Single card ──────────────────────────────────────────────────────────────

function TestimonialCard({ text, image, name, role }: Testimonial) {
  return (
    <div className="p-6 rounded-3xl border border-[#1e1e3a] bg-[#0b0b14] shadow-xl shadow-black/40 hover:border-[#82F413]/35 hover:shadow-[#82F413]/8 transition-all duration-300 max-w-xs w-full">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-[#cbd5e1] text-sm leading-relaxed">{text}</p>
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#1e1e3a]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={40}
          height={40}
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-[#82F413]/20"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-white text-sm leading-5">{name}</span>
          <span className="text-xs text-[#94a3b8] leading-5">{role}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Scrolling column ─────────────────────────────────────────────────────────

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration ?? 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
