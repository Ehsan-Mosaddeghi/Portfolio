import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function NewsItem({ children, date }) {
  const { t, i18n } = useTranslation();

  const millisecondsDiff = Math.abs(
    new Date().getTime() - new Date(date).getTime(),
  );
  const seconds = Math.floor(millisecondsDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const dateRegion = i18n.language === "fa" ? "fa-IR" : "en-US";

  const convertedDate = new Date(date).toLocaleString(dateRegion, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [convertedMonthAndDay, convertedYear] = convertedDate.split(",");

  return (
    <>
      <div className="grid grid-cols-2 py-8 text-xl sm:grid-cols-[135px_135px_1fr]">
        {convertedDate !== "Invalid Date" && (
          <span className="">
            {days > 0 ? `${days} ${t("days ago", { days })}` : "New"}
          </span>
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
NewsItem.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string,
};

export default NewsItem;
