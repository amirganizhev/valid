function validateForm () {

/*Этап №1*/
    /*Валидация номера телефона(id="phoneNumber")*/
    var phoneNumber = document.getElementById('phoneNumber');
    var phoneNumber_regexp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (!phoneNumber_regexp.test(phoneNumber.value)) {
        alert('Некорректный номер телефона');
        return false;
    }
    /*Валидация email(id="email")*/
    var email = document.getElementById('email');
    var email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    if (!email_regexp.test(email.value)) {
        alert('Некорректный email');
        return false;
    }

/*Этап №2*/
    /*Валидация фамилия(id="lastName")*/
    var lastName = document.getElementById('lastName');
    var lastName_regexp = /^[А-Яа-яЁё]+$/;
    if (!lastName_regexp.test(lastName.value)) {
        alert(' "Некорректная фамилия" - одно слово на русском в любом регистре');
        return false;
    } 
    /*Валидация имени(id="firstName")*/
    var firstName = document.getElementById('firstName');
    var firstName_regexp = /^[А-Яа-яЁё]+$/;
    if (!firstName_regexp.test(firstName.value)) {
        alert(' "Некорректное имя" - одно слово на русском в любом регистре');
        return false;
    }
    /*Валидация даты рождения(id="birthday")*/
    var birthday = document.getElementById('birthday');
    var birthday_regexp = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    if (!birthday_regexp.test(birthday.value)) {
        alert('Некорректная дата рождения');
        return false;
    }
    /*Валидация суммы займа(id="loan_sum")*/
    var sumLoan = document.getElementById('loan_sum');
    var sumLoan_regexp = /^[+-]?(?<!\.)\b[0-9]+\b(?!\.[0-9])$/; 
    if (!sumLoan_regexp.test(sumLoan.value)) {
        alert('Некорректно указана сумма займа, укажите целове число');
        return false;
    }

/*Этап №3*/
    /*Валидация серии паспорта(id="passportSeries")*/
    var passportSeries = document.getElementById('passportSeries');
    var passportSeries_regexp = /^([0-9]{2}\s{1}[0-9]{2})?$/; /*\s{1} – позволяет ввести один пробел.*/
    if (!passportSeries_regexp.test(passportSeries.value)) {
        alert('Некорректная серия паспорта');
        return false;
    }
    /*Валидация номера паспорта(id="passportNumber")*/
    var passportNumber = document.getElementById('passportNumber');
    var passportNumber_regexp = /^\d{3}\s\d{3}?$/;
    if (!passportNumber_regexp.test(passportNumber.value)) {
        alert('Некорректный номер паспорта');
        return false;
    }
    /*Валидация кода подразделения(id="passportDepCode")*/
    var passportDepCode = document.getElementById('passportDepCode');
    var passportDepCode_regexp = /^([0-9]{3}[-]{1}[0-9]{3})?$/; /*[-]{1} – позволяет ввести один символ ‘-’*/
    if (!passportDepCode_regexp.test(passportDepCode.value)) {
        alert('Некорректный код подразделения');
        return false;
    }
    /*Валидация даты выдачи паспорта(id="passportDate")*/
    var passportDate = document.getElementById('passportDate');
    var passportDate_regexp = /^\d{2}[./-]\d{2}[./-]\d{4}$/; 
    if (!passportDate_regexp.test(passportDate.value)) {
        alert('Некорректная дата выдачи паспорта');
        return false;
    }
    /*Валидация даты выдачи паспорта(id="passportPoint")*/
    var passportPoint = document.getElementById('passportPoint');
    var passportPoint_regexp = /^[А-Яа-яЁё]+$/; 
    if (!passportPoint_regexp.test(passportPoint.value)) {
        alert('Некорректно указано "Кем выдан паспорт"');
        return false;
    }
    /*Валидация места рождения(id="birthPlace")*/
    var birthPlace = document.getElementById('birthPlace');
    var birthPlace_regexp = /^[А-Яа-яЁё]+$/; 
    if (!birthPlace_regexp.test(birthPlace.value)) {
        alert('Некорректно указано "Место рождения"');
        return false;
    }   

/*Этап №4*/
    /*Валидация региона(id="regionRegister")*/
    var region = document.getElementById('regionRegister');
    var region_regexp = /^[А-Яа-яЁё]+$/; 
    if (!region_regexp.test(region.value)) {
        alert('Некорректно указан "Регион"');
        return false;
    }
    /*Валидация города(id="cityRegister")*/
    var city = document.getElementById('cityRegister');
    var city_regexp = /^[А-Яа-яЁё]+$/; 
    if (!city_regexp.test(city.value)) {
        alert('Некорректно указан "Город"');
        return false;
    }
    /*Валидация улицы(id="streetRegister")*/
    var street = document.getElementById('streetRegister');
    var street_regexp = /^[А-Яа-яЁё]+$/; 
    if (!street_regexp.test(street.value)) {
        alert('Некорректно указана "Улица"');
        return false;
    }
    /*Валидация номера дома(id="houseRegister")*/
    var house = document.getElementById('houseRegister');
    var house_regexp = /^[+-]?(?<!\.)\b[0-9]+\b(?!\.[0-9])$/; 
    if (!house_regexp.test(house.value)) {
        alert('Некорректно указан "Номер дома"');
        return false;
    }
    /*Валидация номера квартиры(id="flatRegister")*/
    var flat = document.getElementById('flatRegister');
    var flat_regexp = /^[+-]?(?<!\.)\b[0-9]+\b(?!\.[0-9])$/; 
    if (!flat_regexp.test(flat.value)) {
        alert('Некорректно указан "Номер квартиры"');
        return false;
    }  
}


