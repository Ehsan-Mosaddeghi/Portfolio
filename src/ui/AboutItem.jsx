function AboutItem({ children, title }) {
  return (
    <>
      <div className="my-8 leading-8">
        <div>
          <h2 className="text-3xl">{title}</h2>
          {children}
        </div>
      </div>
      <div className="break-line"></div>
    </>
  );
}

export default AboutItem;
