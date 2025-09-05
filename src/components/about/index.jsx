import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in technology is fueled by the art of transforming ideas into impactful solutions. With JavaScript as my foundation, I’ve mastered frameworks like React.js and Next.js to build dynamic, responsive applications that connect people seamlessly across the web.

The MERN stack is my trusted toolkit, powering full-stack creations like Book-A-Doc and Movie-Insight, while my exploration into Generative AI and Machine Learning has led to projects in time-series anomaly detection and computer vision (YOLOv5). These experiences let me blend web engineering with cutting-edge AI — crafting applications that are not only functional but intelligent.

I embrace the principles of design, scalability, and innovation, ensuring every project balances performance with usability. From hackathons to internships, each step sharpens my ability to solve real-world challenges while experimenting with new technologies.

Join me as I continue this journey — combining software engineering, AI, and creativity — to shape solutions that empower businesses and inspire people.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

     


        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Tushar Chahar's Skills"
            loading="lazy"
          />
        </ItemLayout>

 
      </div>
    </section>
  );
};

export default AboutDetails;
