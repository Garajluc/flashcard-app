export const getErrorMessages = (error?: Error): string[] | null => {
  if (!error) {
    return null;
  }
  return error.message?.split('\n') ?? 'Failed to fetch';
};
