import { useState } from 'react';

const emailRegExt = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const stringOnlyRegExp = new RegExp(/[0-9]/);
const passwordRegExp = new RegExp(/([a-z A-Z]{1,})([0-9]{1,})/);

const validateFunctions = {
  required: {
    validate: value => !!value?.length,
    errorMessage: 'Required field!',
  },
  min: (count) => ({
    validate: (value) => value?.length >= count,
    errorMessage: `Minimal length ${count}!`,
  }),
  max: (count) => ({
    validate: (value) => value?.length <= count,
    errorMessage: `Maximum length ${count}!`,
  }),
  stringOnly: {
    validate:  value => !stringOnlyRegExp.test(value),
    errorMessage: 'Allow letter only!',
  },
  email: {
    validate: value => emailRegExt.test(value),
    errorMessage: 'Wrong email!',
  },
  password: {
    validate: value => passwordRegExp.test(value),
    errorMessage: 'Wrong password format!',
  },
};

const useForm = (props) => {
  const [ isFormError, setIsFormError ] = useState(false);

  const fields = Object.keys(props).map((fieldKey) => {
    const [ value, setValue ] = useState(props[fieldKey].defaultValue ?? '');
    const [ error, setError ] = useState('');

    const onChange = (event) => {
      setIsFormError(false);
      setValue(event.target.value);
      setError('');
    };

    return {
      ...props[fieldKey],
      name: fieldKey,
      setError,
      bind: {
        id: fieldKey,
        name: fieldKey,
        type: props[fieldKey].type,
        label: props[fieldKey].label,
        placeholder: props[fieldKey].placeholder,
        value,
        onChange,
        error,
      },
    };
  });

  const validateForm = () => {
    const hasError = fields.map(field => {
      const fieldValidateResult = field.validateRules
        .map(rule => {
          const validateResult = rule.includes('max') || rule.includes('min')
            ? validateFunctions[rule.split('_')[0]](rule.split('_')[1]).validate(field.bind.value)
            : validateFunctions[rule].validate(field.bind.value);
          if (!validateResult) {
            field.setError(
              rule.includes('max') || rule.includes('min')
                ? validateFunctions[rule.split('_')[0]](rule.split('_')[1]).errorMessage
                : validateFunctions[rule].errorMessage
            )
          }

          return validateResult;
        });

      return fieldValidateResult.some(result => !result);
    }).some(result => result);

    if (hasError) {
      setIsFormError(true);
      return false;
    }

    return fields.reduce((acc, field) => {
      acc[field.name] = field.bind.value;

      return acc;
    }, {});
  };

  return {
    fields,
    isFormError,
    validateForm,
  };
};

export default useForm;
