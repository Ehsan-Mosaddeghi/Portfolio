function NewsItem({ children, date }) {
  return (
    <div className="flex justify-center gap-4">
      <span>{date}</span>

      {children}
    </div>
  );
}

export default NewsItem;
