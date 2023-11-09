export function formatDate(inputDate: string): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  let dateParts: string[]; // Declare dateParts here

  if (inputDate.match(/\d{2}\/\d{2}\/\d{4}/)) {
    const splitParts = inputDate.split("/");
    dateParts = [splitParts[1], splitParts[0], splitParts[2]];
  } else {
    dateParts = inputDate.split(".");
  }

  const year: number = parseInt(dateParts[2], 10);
  const month: number = parseInt(dateParts[1], 10) - 1;
  const day: number = parseInt(dateParts[0], 10);

  const formattedDate: string = new Date(year, month, day).toLocaleDateString(
    "en-US",
    options
  );

  return formattedDate.toUpperCase().replace(/,/g, "");
}

export const formatDateToLocale = (dateTime: string): string => {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return `${formattedDate}, ${formattedTime}`;
};
