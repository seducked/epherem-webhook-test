export function corsHeaders() {
  return { 'Access-Control-Allow-Origin': '*' };
}

export function run(expr: string) {
  return new Function(expr)();
}
