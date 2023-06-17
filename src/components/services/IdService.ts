export const convertValueToId = (value: string): string => {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/^[0-9]+/, '')
    .replace(/(?![a-z0-9]|\s)./g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .trim();
};
