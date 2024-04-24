export async function initMsw() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./browser");
  return worker.start();
}
