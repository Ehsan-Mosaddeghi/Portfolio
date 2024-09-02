function NewsItem({ children, date }) {
  const millisecondsDiff = Math.abs(
    new Date().getTime() - new Date(date).getTime(),
  );
  const seconds = Math.floor(millisecondsDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const convertedDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [convertedMonthAndDay, convertedYear] = convertedDate.split(",");

  return (
    <>
      <div className="grid grid-cols-2 py-8 text-xl sm:grid-cols-[135px_135px_1fr]">
        {convertedDate !== "Invalid Date" && (
          <span className="">{days > 0 ? `${days} days ago` : "New"}</span>
        )}
        <span>
          {convertedMonthAndDay}, <br /> {convertedYear}
        </span>
        <div className="col-span-2 sm:col-auto">{children}</div>
      </div>
      <div className="break-line"></div>
    </>
  );
}

export default NewsItem;
