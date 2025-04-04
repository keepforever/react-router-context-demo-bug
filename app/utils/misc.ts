export function getBrightColor(str: string): string {
  // Create a hash of the string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert the hash to a bright hex color code
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
}

interface LogObjectDetailsConfig {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  objects: Record<string, any>;
  filename: string;
  color?: string;
  shouldLog?: boolean;
}

export function logObjectDetails({
  objects,
  filename,
  color,
  shouldLog = true,
}: LogObjectDetailsConfig): void {
  if (!shouldLog) return;

  console.group(
    `%c${filename}`,
    `color: ${
      color || getBrightColor(filename || "")
    }; font-size: 13px; font-weight: bold;`
  );

  Object.entries(objects).forEach(([key, obj]) => {
    console.info(`${key} = `, obj);
  });

  console.groupEnd();
}
