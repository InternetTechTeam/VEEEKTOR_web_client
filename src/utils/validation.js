const validationRules = {
    name: [required, minLength(2), maxLength(30)],
    surname: [required, minLength(2), maxLength(30)],
    patronymic: [required, minLength(2), maxLength(30)],
    email: [required, emailFormat],
    password: [required, onlyEnglishLetters , minLength(8), maxLength(50)],
    dep_id: [required],
    env_id: [required]

}

function emailFormat(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? undefined : 'Введите корректный email адрес';
}

function required(value) {
    return value ? undefined : "Поле обязательно для заполнения"
}

function onlyEnglishLetters(value) {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  
  if (!passwordRegex.test(value)) {
    return 'В пароле могу присутсвтвовать только английские буквы';
  }
  
  return undefined; 
}

function minLength(min) {
    return function (value) {
        return value && value.length >= min
        ? undefined
        : `Минимальная длина ${min} символов`
    }
}

function maxLength(max) {
    return function (value) {
        return value && value.length <= max
        ? undefined
        : `Максимальная длина ${max} символов`
    }
}

export function validate(values) {
    let errors = {};

    for(let field in values) {
        const rules = validationRules[field];

        if(rules) {
            let error = rules.reduce((error, rule) => {
                if(!error) return rule(values[field]);
                return error;
            }, null);

            if(error) errors[field] = error;
        }
    }

    return errors;
}