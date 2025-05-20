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

function getContentPreview(content: string): string {
  const splited = content.split('##')
  if (splited[0].length <= 350) {
    return splited[0]
  }

  return splited[0].slice(0, 320) + " . . ."
}

export { formatMillisToDate, formatTimestampToDate, getTechStackIconPath, getContentPreview };
