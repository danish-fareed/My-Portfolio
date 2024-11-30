'use client';
import { ReactNode } from 'react';
// import Link from 'next/link';

interface SectionCardProps {
  title?: string; // Title should be a string
  children?: ReactNode; // Children can be any React node (text, JSX, components)
  link?: string; // Link is optional and should be a string
}

const SectionCard = ({ children }: SectionCardProps) => (
  <div className="rounded-[32px] bg-[#252438] px-9 py-10">
    {/* <div className="flex items-center justify-between">
      <h3 className="text-xl font-semibold">{title}</h3>
      {link && (
        <Link href={link} className="text-primary hover:underline">
          ↗
        </Link>
      )}
    </div> */}
    <div className="text-gray-300">{children}</div>
  </div>
);

export const Cards = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {/* About Card */}
      <SectionCard>
        <div className="flex flex-col gap-4">
          <div>
            <img src="./img/profile-pic.png" alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <p>I'm</p>
              <h1 className="text-2xl font-medium">DanishF.</h1>
              <p>, Product Designer</p>
            </div>
            <p>
              I’m interested in React, Node, Product Design, Jamstack, Startups,
              Cryptocurrencies, and Music.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-[32px] !bg-[#262440] px-9 py-10">
          <img src="./svg/linkedin.svg" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-[32px] !bg-[#422742] px-9 py-10">
          <img src="./svg/dribbble.svg" alt="" />
        </div>
      </div>

      {/* Education Card */}
      <SectionCard title="Education" link="/education">
        <h4 className="text-2xl font-medium">The University of Lahore</h4>
        <p className="mt-2 text-sm">
          BS - Computer Science (Oct. 2023 – Continued)
        </p>
        <p className="mt-2 text-sm">
          Courses: Programming Fundamentals, OOP, Data Structures & Algorithms,
          Databases, and more.
        </p>
      </SectionCard>

      {/* Experience Cards */}
      <SectionCard title="ITCurves" link="/experience#itcurves">
        Graphic Designer | UI/UX Designer (Mar. 2020 – Continued)
        <p className="text-sm">BS - Computer Science (Oct. 2023 – Continued)</p>
        <p className="mt-2 text-sm"></p>
      </SectionCard>

      <SectionCard title="HorizonGO" link="/experience#horizongo">
        UI/UX Designer (Jun. 2022 – Mar. 2023)
        <p className="text-sm">BS - Computer Science (Oct. 2023 – Continued)</p>
        <p className="mt-2 text-sm"></p>
      </SectionCard>

      {/* Contact Card */}
      <SectionCard title="Contact">
        <p>
          Email:{' '}
          <a
            href="mailto:danishfareed55@gmail.com"
            className="text-primary hover:underline"
          >
            danishfareed55@gmail.com
          </a>
        </p>
        <p>
          Phone:{' '}
          <a href="tel:+923039371561" className="text-primary hover:underline">
            +92 (303) 93-715-61
          </a>
        </p>
      </SectionCard>
    </section>
  );
};
