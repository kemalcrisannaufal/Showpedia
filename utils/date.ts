const getFormattedDate = (strDate: string | null | undefined) => {
  if (typeof strDate !== "string") return "";
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

const getAge = (
  birthdate: string | null | undefined,
  deathdate: string | null | undefined = "none"
) => {
  if (typeof birthdate !== "string") {
    return;
  }

  let now;
  if (typeof deathdate === "string" && deathdate !== "none") {
    now = new Date(deathdate);
  } else {
    now = new Date();
  }
  const bdate = new Date(birthdate);
  return now.getFullYear() - bdate.getFullYear();
};

export {
  getFormattedDate,
  getDate,
  getSevenConsecutiveDate,
  getDayByDate,
  getAge,
};
