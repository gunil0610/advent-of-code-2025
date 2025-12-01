import fs from "fs";

export function readInput(filePath: string): string[] {
  const content = fs.readFileSync(filePath, "utf-8");
  return content.trim().split("\n");
}
