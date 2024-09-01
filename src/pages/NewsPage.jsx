import NewsItem from "../ui/NewsItem";
import AnimatePage from "../ui/AnimatePage";

function NewsPage() {
  return (
    <AnimatePage>
      <h1 className="text-3xl">News Page</h1>

      <NewsItem date="8/31 /2024">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          libero.
        </p>
      </NewsItem>

      <NewsItem date="8/25 /2024">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <a href="#" className="text-yellow-600">
            Culpa sit
          </a>
          nesciunt autem quae magni dolore aliquam aliquid maiores similique
          qui?
        </p>
      </NewsItem>
    </AnimatePage>
  );
}

export default NewsPage;
