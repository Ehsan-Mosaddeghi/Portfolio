import AnimatePage from "../ui/AnimatePage";

function ProjectsPage() {
  return (
    <AnimatePage>
      <h1 className="mb-8 text-6xl">Projects</h1>

      <ul className="grid grid-cols-3 gap-4">
        <a
          href=""
          className="gap- flex flex-col rounded-md bg-stone-900 duration-300 hover:-translate-y-4 hover:shadow-[0_40px_10px_-15px_rgba(0,0,0,0.3)]"
        >
          <img
            src="/images/projects_todo.png"
            alt=""
            className="rounded-t-md"
          />

          <div className="space-y-4 p-2">
            <h4 className="text-2xl">Lorem, ipsum dolor.</h4>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, nisi!
            </p>
          </div>
        </a>
      </ul>
    </AnimatePage>
  );
}

export default ProjectsPage;
