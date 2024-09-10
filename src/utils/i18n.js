import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: "en",
    fallbackLng: "en",
    resources: {
      fa: {
        translation: {
          Home: "خانه",
          About: "درباره ما",
          Projects: "پروژه ها",
          News: "خبر ها",
          Skills: "مهارت ها",
          Socials: "ارتباط با من",
          "Hi It's Ehsan": "سلام, احسان هستم",
          "19 years old self-taught frontend developer passionate about learning and creating innovative user experiences. Eager to grow and explore new technologies.":
            "    توسعه دهنده فرانت اند خودآموز علاقه مند به یادگیری و ایجاد تجربیات کاربری نوآورانه. مشتاق به رشد و کاوش تکنولوژی های جدید",
          "My Resume": "رزومه",
          "Some of the software I use on daily basis":
            "برخی از ابزار هایی که من استفاده میکنم",
          "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product":
            "یک توسعه‌دهنده وب متمرکز بر فرانت‌اند که پیشانی وب‌سایت‌ها و برنامه‌های کاربردی وب را ایجاد می‌کند که منجر به موفقیت محصول کلی می‌شود.",
          "Ehsan Mosaddeghi": "احسان مصدقی",
          "Frontend developer": "برنامه نویس فرانت اند",
          "© 2024 Ehsan Mosaddeghi, Tabriz, Iran. All rights reserved.":
            "© احسان مصدقی , تبریز , ایران . تمامی حقوق محفوظ است  2024",
          "My Journey as a Frontend Developer":
            "سفر من به عنوان برنامه نویس فرانت اند",
          "My fascination with frontend development began when I was just 16. I that I had a creative streak and a passion for working with design and colors. As I delved deeper into the world of coding, I realized that frontend development was the perfect blend of art and technology. I found myself drawn to the idea of bringing designs to life, creating interactive experiences, and making a visual impact. It was then that I knew I wanted to pursue a career in frontend development, and I've been hooked ever since!":
            "سفر من از سن ۱۶ سالگی شروع شد وقتی که فهمیدم که یک استعداد خلاقانه و علاقه به طراحی و کار کردن با رنگ ها دارم. با ورود به دنیای برنامه نویسی متوجه شدم که فرانت اند ترکیبی کامل از هنر و فناوری است",
          "My Interests and Hobbies": "علایق و سرگرمی های من",
          "Playing games that challenge my problem-solving skills and creativity":
            "انجام بازی هایی که مهارت های حل مسئله و خلاقیت من را به چالش می کشد",
          "Reading books on science, technology, and philosophy":
            "خواندن کتاب های علم، فناوری و فلسفه",
          "Watching movies that explore the human condition and the future of technology":
            "تماشای فیلم هایی که شرایط انسان و آینده فناوری را بررسی می کنند",
          "Listening to podcasts on topics ranging from AI and machine learning to entrepreneurship and personal growth":
            "گوش دادن به پادکست ها در مورد موضوعات مختلف از هوش مصنوعی و یادگیری  تا کارآفرینی و رشد شخصی",
          "My Goals and Aspirations": "اهداف و آرزوهای من",
          "As I embark on my university journey, I'm eager to expand my knowledge, develop my skills, and contribute to the tech community. My ultimate goal is to create innovative solutions that positively impact people's lives and make a difference in the world.":
            "در حالی که سفر دانشگاهی خود را آغاز می کنم، مشتاق هستم که دانش خود را گسترش دهم، مهارت های خود را توسعه دهم و به جامعه فناوری کمک کنم. هدف نهایی من ایجاد راه حل های نوآورانه ای است که تأثیر مثبتی بر زندگی مردم بگذارد و در جهان تغییر ایجاد کند",
          "Get in Touch": " تماس با من",
          "If you'd like to learn more about my projects, experiences, or interests, feel free to explore my portfolio or reach out to me directly. I'm always open to new opportunities, collaborations, and conversations about the latest tech trends and ideas.":
            "اگر می‌خواهید درباره پروژه‌ها، تجربیات یا علایق من اطلاعات بیشتری کسب کنید، می‌توانید مستقیماً با من تماس بگیرید. من همیشه برای فرصت‌های جدید، همکاری‌ها و گفتگوها درباره آخرین روندها و ایده‌های فناوری وقت دارم",
          "days ago": "روز قبل",
          "Portolio created": "ساخته شدن وب سایت",
        },
      },
    },
  });
