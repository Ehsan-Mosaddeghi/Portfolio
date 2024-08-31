import Typewriter from "typewriter-effect";

import "./HomePage.css";
import SkillsList from "../components/SkillsList";
import AnimatePage from "../ui/AnimatePage";

function HomePage() {
  const title = "Hi, It's Ehsan";

  return (
    <AnimatePage>
      <div className="flex flex-col gap-20">
        <div className="flex items-center justify-center gap-8">
          <div className="image-container relative">
            <img
              src="/images/homepage-image.jpg"
              alt="portfolio image"
              className="image-me relative z-10 w-64 rounded-full"
            />
          </div>

          <div className="space-y-4 text-5xl text-stone-200">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(title).start();
              }}
            />

            <p className="max-w-sm text-lg">
              19 years old self-taught frontend developer passionate about
              learning and creating innovative user experiences. Eager to grow
              and explore new technologies.
            </p>
          </div>
        </div>

        <div className="break-line"></div>

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-5xl">Skills</h2>
            <p>Some of the software I use on daily basis</p>
          </div>
          <div>
            <SkillsList />
          </div>
        </div>
      </div>
    </AnimatePage>
  );
}

export default HomePage;
