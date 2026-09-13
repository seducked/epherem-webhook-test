export function runUserExpression(expr: string) {
  const fn = new Function(expr);
  return fn();
}

export function corsHeaders() {
  return { 'Access-Control-Allow-Origin': '*' };
}

export function handle(req: { body: string }) {
  return eval(req.body);
}
