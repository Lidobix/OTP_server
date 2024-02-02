const regEx = {
  phoneNumber: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
  password: '^\\d{6}$',
};

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
