function ProjectItem() {
  return (
    <a
      href=""
      className="gap- flex flex-col rounded-md bg-stone-900 duration-300 hover:-translate-y-4 hover:shadow-[0_40px_10px_-15px_rgba(0,0,0,0.3)]"
    >
      <img src="/images/projects_todo.png" alt="" className="rounded-t-md" />

      <div className="space-y-4 p-2">
        <h4 className="text-2xl">To Do list website</h4>
        <p className="text-lg">Created with pure HTML & CSS and JavaScript</p>
      </div>
    </a>
  );
}

export default ProjectItem;
