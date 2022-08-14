export const isSubsequence = (str1: string, str2: string): boolean => {
  const searchArr = str2.split('');
  const left = 0
  const right = str1.length - 1
  let tempWord = '';

  for (let i = 0; i < right; i++) {
    tempWord += searchArr[i]
  }

  if (tempWord === str1) return true;
  
  for (let i = 0; i < searchArr.length; i++) {
    
  }

  return false;
} 