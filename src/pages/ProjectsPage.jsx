function ProjectsPage() {
  return (
    <section className="w-full min-h-svh bg-primary ">
      <div className="container m-auto text-center pt-32">
        <h1 className="text-3xl">Projects</h1>

        <div className="text-center w-[350px] h-[200px] border">
          <h3 className="text-xl my-4">Todo list</h3>
          <img
            src="/images/projects_todo.png"
            alt=""
            className="w-full h-full "
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
