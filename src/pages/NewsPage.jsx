import NewsItem from "../ui/NewsItem";
import AnimatePage from "../ui/AnimatePage";

function NewsPage() {
  return (
    <AnimatePage>
      <h1 className="text-3xl">News Page</h1>

      <NewsItem date="8/31 /2024">
        <p>Portolio created 😄</p>
      </NewsItem>
    </AnimatePage>
  );
}

export default NewsPage;
