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


//this is a Epherem test done on 15/9/2026 1519 to test scan upon push. tung tung sahur. 
