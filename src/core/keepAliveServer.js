export function startKeepAliveServer() {
  if (!process.env.RENDER_EXTERNAL_URL) {
    return;
  }

  setInterval(() => {
    fetch(process.env.RENDER_EXTERNAL_URL).catch(() => {});
  }, 10 * 60 * 1000); // every 10 min, stays under Render's 15-min cutoff
}
