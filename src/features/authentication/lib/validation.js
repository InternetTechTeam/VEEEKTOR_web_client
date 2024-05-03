


const validationAuthRules = {
    name: [required, nameFormat, minLength(2), maxLength(30)],
    surname: [required, nameFormat, minLength(2), maxLength(30)],
    patronymic: [required, nameFormat, minLength(2), maxLength(30)],
    email: [required, emailFormat],
    password: [required, onlyEnglishLetters , minLength(8), maxLength(50)],
    dep_id: [required],
    env_id: [required]
}

const validationCourseRules = {
    name: [required, courseNameFormat, minLength(5), maxLength(50)],
    term: [required, termFormat],
    teacher_id : [required],
    dep_id: [required]
}

export const ValidationRules = {
    AUTH: validationAuthRules,
    COURSE: validationCourseRules
}

function termFormat(value) {
    return !isNaN(value) && value > 0 ? undefined : 'Введите корректный номер семестра';
}

function courseNameFormat(value) {
    const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
    return nameRegex.test(value) ? undefined : "Введите корректное название курса";
}

function emailFormat(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? undefined : 'Введите корректный email адрес';
}

function nameFormat(value) {
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    return nameRegex.test(value) ? undefined : "Введите корректное имя"
}

function required(value) {
    return value ? undefined : "Поле обязательно для заполнения"
}

function onlyEnglishLetters(value) {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  
  if (!passwordRegex.test(value)) {
    return 'В пароле могут присутствовать только английские буквы';
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

export function validate(values, rules = validationAuthRules) {
    let errors = {};

    for(let field in values) {
        const currentRules = rules[field];

        if(currentRules) {
            let error = currentRules.reduce((error, rule) => {
                if(!error) return rule(values[field]);
                return error;
            }, null);

            if(error) errors[field] = error;
        }
    }

    return errors;
}