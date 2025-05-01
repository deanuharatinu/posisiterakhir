function formatMillisToDate(millis?: string): string {
  if (millis == undefined) {
    return "";
  }

  const date = new Date(Number(millis));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTimestampToDate(timestamp?: string): string {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getTechStackIconPath(techStack?: string): string {
  if (techStack == undefined) {
    return ""
  }

  return `/techstack-icons/${techStack?.toLowerCase()}.svg`
}

export { formatMillisToDate, formatTimestampToDate, getTechStackIconPath };