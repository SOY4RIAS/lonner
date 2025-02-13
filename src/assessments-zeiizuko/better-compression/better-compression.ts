export function betterCompression(s: string = ''): string {
  if (!s) return '';
  
  const input = s;
  const regex = /[a-zA-Z!@#\$%\^&\*\(\)\-_=\+\[\]\{\};:'",.<>?/\\|`~]{2,}/;
  const regex2 = /^([a-zA-Z\d!@#\$%\^&\*\(\)\-_=\+\[\]\{\};:'",.<>?/\\|`~]\d+)+$/;
  
  if (regex.test(input)) return '';
  if (!regex2.test(input.replace(/\s+/g, ''))) return input.trim();
  
  const regex3 = /[a-zA-Z\d!@#\$%\^&\*\(\)\-_=\+\[\]\{\};:'",.<>?/\\|`~]\d+/g;
  let frequencyMap = new Map();
  let matches = input.match(regex3);

  if (!matches) return input.trim();

  for (let match of matches) {
    let char = match[0];
    let freq = parseInt(match.slice(1), 10);
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + freq);
  }

  return [...frequencyMap]
    .sort(([charA], [charB]) => charA.localeCompare(charB))
    .map(([char, freq]) => `${char}${freq}`)
    .join('');
}
