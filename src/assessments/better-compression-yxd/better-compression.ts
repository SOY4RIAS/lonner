const haveConsecutiveLetters = (str: string): boolean => {
  return /[a-zA-Z]{2}/.test(str);
};

const haveSpecialCharacters = (str: string): boolean => {
  return /[^a-zA-Z0-9]/.test(str);
};

const getObjectOfLetters = (input: string): Record<string, number> => {
  const dictionary: Record<string, number> = {};

  const regex = /([a-zA-Z])(\d+)/g;
  let match;

  while ((match = regex.exec(input)) !== null) {
    const [_, key, value] = match;
    dictionary[key] = (dictionary[key] || 0) + Number(value);
  }

  return dictionary;
};

const formatResult = (letters: Record<string, number>): string => {
  let format = '';

  for (const letter in letters) {
    format += `${letter}${letters[letter]}`;
  }

  return format;
};

export function betterCompression(s: string): string {
  const inputTrimmed = s.replace(/\s/g, '');

  if (haveConsecutiveLetters(inputTrimmed)) {
    return '';
  }

  if (haveSpecialCharacters(inputTrimmed)) {
    return inputTrimmed;
  }

  const letters = getObjectOfLetters(inputTrimmed);

  return formatResult(letters);
}
