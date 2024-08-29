import Links from "./Links";

function Footer() {
  return (
    <footer className="flex border-b-2 border-red-500 bg-stone-950 py-6">
      <div className="container flex w-full justify-between">
        <div className="max-w-lg space-y-3">
          <h2>Ehsan Mosaddeghi</h2>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="space-y-3 text-xl">
          <h4>SOCIAL </h4>
          <Links />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
