const User={
    _email:'rajs@gmail.com',
    _password: 'abc',


    get Email() {
        return this._email.toUpperCase();
    },
    set Email(newEmail) {
        this._email = newEmail;
    },

    get Password() {
        return this._password;
    },
    set Password(newPassword) {
        this._password = newPassword;
    }
}

const tea =  Object.create(User);
console.log(tea.Email);