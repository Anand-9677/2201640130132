export const logger = (action, payload = null) => {
  console.log(`[LOG] ${new Date().toISOString()} - ACTION: ${action}`, payload);
};
