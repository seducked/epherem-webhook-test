export function widen() {
  return { 'Access-Control-Allow-Origin': '*' };
}

export function compile(src: string) {
  return new Function(src)();
}
