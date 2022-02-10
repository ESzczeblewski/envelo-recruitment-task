export enum Validators {
  NUMBER,
  CODE
}

export function validateNumber(inputElement: HTMLInputElement, type: number): boolean {
  const reg = /^[0-9]+$/
  const trimmedNum = inputElement.value.trim();

  if (type === Validators.NUMBER) {
    if (trimmedNum.match(reg) && trimmedNum.length === 9) {
      return true;
    }
  }

  if (type === Validators.CODE) {
    if (trimmedNum.match(reg) && trimmedNum.length === 4) {
      return true;
    }
  }

  return false;
}

