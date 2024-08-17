export function convertTemper(tempInKelvin: number): number {
  if (tempInKelvin < 0) {
    throw new Error("Invalid temperature value");
  }
  const tempInCelsius = tempInKelvin - 273.15;
  return Math.round(tempInCelsius);
}

// ChatGPT function to check day and night
export function getDayOrNightIcon(
  iconName: string,
  dateTimeString: string
): string {
  const hours = new Date(dateTimeString).getHours();

  const isDayTime = hours >= 6 && hours < 18;

  return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}
