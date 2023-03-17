export const removeHtmlTagsFromString = (string: string): string => {
  return string.replace(/(<([^>]+)>)/gi, '');
};
