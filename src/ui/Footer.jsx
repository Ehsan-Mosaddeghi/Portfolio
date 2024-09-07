import ResumeButton from "./ResumeButton";
import Links from "./Links";

function Footer() {
  return (
    <footer className="flex border-b-2 border-blue-500 bg-[#00000050]">
      <div className="container flex w-full justify-between">
        <div className="max-w-lg space-y-3">
          <h2>Ehsan Mosaddeghi</h2>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="flex flex-col justify-center gap-[0.6rem] text-center text-xl">
          <h4>SOCIAL </h4>
          <Links />
          <ResumeButton
            href="https://drive.google.com/file/d/1Aj4nrS6B-AW5Vj2AijqYH5ct2rLJezIi/view?usp=drive_link"
            target="blink"
          >
            My Resume
          </ResumeButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
