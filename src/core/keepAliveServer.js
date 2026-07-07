import http from 'node:http';

export function startKeepAliveServer() {
  const port = process.env.PORT || 3000;

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  });

  server.listen(port, () => {
    console.log(`Keep-alive server listening on port ${port}`);
  });

  if (process.env.RENDER_EXTERNAL_URL) {
    setInterval(() => {
      fetch(process.env.RENDER_EXTERNAL_URL).catch(() => {});
    }, 10 * 60 * 1000); // every 10 min, stays under Render's 15-min cutoff
  }
}
