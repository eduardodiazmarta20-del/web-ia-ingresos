export function readingTime(text: string): number {
  const wpm = 225;
  const clean = (text || '').replace(/```[\s\S]*?```/g, ' ').replace(/<[^>]+>/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wpm));
}

export function formatReadingTime(min: number): string {
  return `${min} min de lectura`;
}
