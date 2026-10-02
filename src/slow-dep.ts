// Simulates a lazily loaded segment that takes 50ms to load.
await new Promise((resolve) => setTimeout(resolve, 50));
export const label = "visible";
