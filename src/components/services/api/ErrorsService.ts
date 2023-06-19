export const getErrorMessages = (error?: Error): string[] | null => {
  if (!error) {
    return null;
  }
  return error.message?.split('\n') ?? 'Failed to fetch';
};

export const getKeysOfNullValues = (obj: Record<string, unknown>): string[] =>
  Object.keys(obj).filter((key) => obj[key] === null);
