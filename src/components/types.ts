export interface IProps {
    title: string,
    description: string,
    id: string,
    image: any
}

export interface ISignup {
    email: string,
    password: string,
    confirmPassword: string
}

export interface ICreateUser {
    email: string,
    password: string
    confirmPassword: string
}