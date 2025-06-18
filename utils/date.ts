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

export { getFormattedDate };
