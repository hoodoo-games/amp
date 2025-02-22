export function info(msg: string) {
  console.log(`info: ${msg}`);
}

export function err(msg: string) {
  throw new Error(msg);
}
