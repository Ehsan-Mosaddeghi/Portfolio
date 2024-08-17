import React from "react";

import Typewriter from "typewriter-effect";

function HomePage() {
  const title = "Hi, It's Ehsan";

  return (
    <section className="w-full min-h-svh  bg-primary flex ">
      <div className=" w-full flex items-center justify-center gap-8">
        <img
          src="../public/images/homepage-image.jpg"
          alt="portfolio image"
          className="w-64 rounded-full"
        />

        <div className="text-5xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(title).start();
            }}
          />

          <p className="text-lg max-w-sm text-zinc-500">
            19 years old self-taught frontend developer passionate about
            learning and creating innovative user experiences. Eager to grow and
            explore new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
