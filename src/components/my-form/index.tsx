import React from 'react'
import InputErrorRenderer from '../form-errors'
import { LockClosedIcon } from '@heroicons/react/solid'
import logo from '../../logo.svg'
import { toEnglishDigit } from '../../utils/general-utils'

type MyState = {
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

class MyForm extends React.Component<any, MyState> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
            password: '',
            formErrors: {
                email: '',
                password: {
                    length: '',
                    hasLowercase: '',
                    hasUppercase: '',
                    hasSpecial: '',
                    hasEnglishDigit: '',
                    hasPersianOrArabic: '',
                },
            },
            emailValid: false,
            passwordValid: false,
            formValid: false,
        }
    }

    handleUserInput = (e: { target: { name: any; value: any } }) => {
        const name = e.target.name
        const value = toEnglishDigit(e.target.value)
        this.setState({ ...this.state, [name]: value }, () => {
            this.validateField(name, value)
        })
    }

    validateField(fieldName: any, value: any) {
        let fieldValidationErrors = this.state.formErrors
        let emailValid = this.state.emailValid
        let passwordValid = this.state.passwordValid
        const emailValidationKey = value.match(
            /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
        )

        switch (fieldName) {
            case 'email':
                emailValid = emailValidationKey && emailValidationKey.length > 0
                fieldValidationErrors.email = emailValid
                    ? ''
                    : ' enter a valid gmail address'
                break
            case 'password':
                let lengthIsValid = value.length > 6
                fieldValidationErrors.password.length = lengthIsValid
                    ? ''
                    : 'enter at least 7 characters'

                let hasLower = value.match(/([a-z])/) && true
                fieldValidationErrors.password.hasLowercase = hasLower
                    ? ''
                    : 'password must contain at least 1 lowercase letter'

                let hasUpper = value.match(/([A-Z])/) && true
                fieldValidationErrors.password.hasUppercase = hasUpper
                    ? ''
                    : 'password must contain at least 1 uppercase letter'

                let hasSpecial = value.match(/[!@#$%]/) && true
                fieldValidationErrors.password.hasSpecial = hasSpecial
                    ? ''
                    : 'password must contain at least one of these characters: ! @ # $ %'

                let hasEnglishNumber = value.match(/[0-9]/) && true
                fieldValidationErrors.password.hasEnglishDigit =
                    hasEnglishNumber
                        ? ''
                        : 'passwoord must containt at least one english digit'

                let hasPersianOrArabicLetter =
                    value.match(/[\u0621-\u064A\u0600-\u06FF]/) && true
                fieldValidationErrors.password.hasPersianOrArabic =
                    hasPersianOrArabicLetter ? 'only use english letters' : ''

                passwordValid =
                    (lengthIsValid && hasLower && hasUpper && hasSpecial) ??
                    false

                break
            default:
                break
        }
        this.setState(
            {
                formErrors: fieldValidationErrors,
                emailValid: emailValid,
                passwordValid: passwordValid,
            },
            this.validateForm
        )
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid,
        })
    }

    errorClass(error: string | any[]) {
        return error?.length === 0 ? '' : 'has-error'
    }

    render() {
        return (
            <>
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img
                                src={logo}
                                className="App-logo mx-auto h-12 w-64 h-60"
                                alt="logo"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>
                        <form
                            className="mt-8 space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault()
                                console.log(this.state)
                            }}
                        >
                            <input
                                type="hidden"
                                name="remember"
                                defaultValue="true"
                            />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className="my-5">
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                        value={this.state.email}
                                        onChange={this.handleUserInput}
                                    />
                                    {this.state.email.length > 0 && (
                                        <div className="panel panel-default">
                                            <InputErrorRenderer
                                                formErrors={
                                                    this.state.formErrors
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="my-5">
                                    <label
                                        htmlFor="password"
                                        className="sr-only"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleUserInput}
                                    />
                                    {this.state.password.length > 0 && (
                                        <div className="panel panel-default">
                                            <InputErrorRenderer
                                                formErrors={
                                                    this.state.formErrors
                                                        .password
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={!this.state.formValid}
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {!this.state.formValid && (
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon
                                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    )}
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default MyForm
