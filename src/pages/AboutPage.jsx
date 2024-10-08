import { useTranslation } from "react-i18next";
import AboutItem from "../ui/AboutItem";
import AnimatePage from "../ui/AnimatePage";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <AnimatePage>
      {/* <AboutItem title={t("About Ehsan Mosaddeghi")}>
        <p>
          {t(
            "Hi, I'm Ehsan Mosaddeghi, a soon-to-be computer science student at the University of Tabriz, Iran. As a tech enthusiast, I'm excited to dive into the world of coding and software development.",
          )}
        </p>
      </AboutItem> */}

      {/* <AboutItem title="A Bit About My Background">
        <p>
          Growing up in Tabriz, I've always been fascinated by technology and
          its endless possibilities. I've spent countless hours honing my
          skills, exploring new programming languages, and experimenting with
          innovative projects. When I'm not studying or working, you can find me
          immersed in a good book, watching a thought-provoking movie, or
          listening to insightful podcasts.
        </p>
      </AboutItem> */}
      <AboutItem title={t("My Journey as a Frontend Developer")}>
        <p>
          {t(
            "My fascination with frontend development began when I was just 16. I that I had a creative streak and a passion for working with design and colors. As I delved deeper into the world of coding, I realized that frontend development was the perfect blend of art and technology. I found myself drawn to the idea of bringing designs to life, creating interactive experiences, and making a visual impact. It was then that I knew I wanted to pursue a career in frontend development, and I've been hooked ever since!",
          )}
        </p>
      </AboutItem>
      <AboutItem title={t("My Interests and Hobbies")}>
        <ul>
          <li>
            {t(
              "Playing games that challenge my problem-solving skills and creativity",
            )}
          </li>
          <li>{t("Reading books on science, technology, and philosophy")}</li>
          <li>
            {t(
              "Watching movies that explore the human condition and the future of technology",
            )}
          </li>
          <li>
            {t(
              "Listening to podcasts on topics ranging from AI and machine learning to entrepreneurship and personal growth",
            )}
          </li>
        </ul>
      </AboutItem>
      <AboutItem title={t("My Goals and Aspirations")}>
        <p>
          {t(
            "As I embark on my university journey, I'm eager to expand my knowledge, develop my skills, and contribute to the tech community. My ultimate goal is to create innovative solutions that positively impact people's lives and make a difference in the world.",
          )}
        </p>
      </AboutItem>
      <AboutItem title={t("Get in Touch")} breakLine={false}>
        <p>
          {t(
            "If you'd like to learn more about my projects, experiences, or interests, feel free to explore my portfolio or reach out to me directly. I'm always open to new opportunities, collaborations, and conversations about the latest tech trends and ideas.",
          )}
        </p>
      </AboutItem>
    </AnimatePage>
  );
}

export default AboutPage;
