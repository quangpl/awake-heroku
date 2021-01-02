export function parseDataFromBuffer<T>(buf: Buffer): T {
  return JSON.parse(buf.toString());
}