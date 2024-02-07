const regEx = {
  phoneNumber: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
  password: '^\\d{6}$',
};

const PWD_LENGTH = 6;

export const validateRegEx = (data) => {
  for (const [key, value] of Object.entries(data)) {
    if (regEx[key]) {
      const globalRegex = new RegExp(regEx[key], 'g');
      return globalRegex.test(value);
    }
  }
  return false;
};

export const createNewDbEnrtry = (phoneNumber) => {};

export const createPassword = () => {
  let index = 0;
  let password = [];
  while (index < PWD_LENGTH) {
    const max = Math.floor(10);
    const min = Math.ceil(0);
    password.push(Math.floor(Math.random() * (max - min + 1)) + min);
    index++;
  }

  return password.join('').toString();
};
