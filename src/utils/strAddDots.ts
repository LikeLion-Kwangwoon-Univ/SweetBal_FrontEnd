function strAddDots(text: string): string {
  return text.length >= 15 ? text.substr(0, 15) + '...' : text;
}
export default strAddDots;
