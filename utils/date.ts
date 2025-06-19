const getFormattedDate = (strDate: string | null) => {
  if (strDate === null) return "";
  const optionsEN: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const date = new Date(strDate);
  const formattedEN = date.toLocaleDateString("en-US", optionsEN);
  return formattedEN;
};

const getDate = () => {
  const date = new Date();
  return date.toISOString().split("T")[0];
};

const getSevenConsecutiveDate = () => {
  const date = new Date();
  const dates: string[] = [];
  for (let i = 1; i <= 7; i++) {
    dates.push(date.toISOString().split("T")[0]);
    date.setDate(date.getDate() + 1);
  }
  return dates;
};

const getDayByDate = (strDate: string) => {
  const date = new Date(strDate);
  const day = date.toLocaleDateString("en-EN", { weekday: "long" });

  return day;
};

export { getFormattedDate, getDate, getSevenConsecutiveDate, getDayByDate };
