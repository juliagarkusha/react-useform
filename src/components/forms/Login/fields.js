export const loginFields = {
  firstName: {
    label: 'Firstname',
    type: 'text',
    validateRules: [ 'required', 'min_2', 'stringOnly' ],
    placeholder: 'Enter the firstname',
    defaultValue: '',
    attr: {},
  },
  email: {
    label: 'Email',
    type: 'email',
    validateRules: [ 'required', 'email' ],
    placeholder: 'Enter the email',
    defaultValue: '',
    attr: {},
  },
  lastName: {
    label: 'LastName',
    type: 'text',
    validateRules: [ 'required', 'min_2', 'stringOnly' ],
    placeholder: 'Enter the lastName',
    defaultValue: '',
    attr: {},
  },
  password: {
    label: 'Password',
    type: 'password',
    validateRules: [ 'required', 'min_6', 'max_10', 'password' ],
    placeholder: 'Enter the password',
    defaultValue: '',
    attr: {},
  },
};