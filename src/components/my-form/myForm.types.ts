export type MyState = {
    email: string
    password: string
    formErrors: {
        email: string
        password: {
            length: string
            hasLowercase: string
            hasUppercase: string
            hasSpecial: string
            hasEnglishDigit: string
            hasPersianOrArabic: string
        }
    }
    emailValid: boolean
    passwordValid: boolean
    formValid: boolean
}
