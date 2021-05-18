import { useForm } from "react-hook-form";

import {
    SigninBox,
    SigninWrapper,
    ButtonGroup,
    SigninForm,
    SigninFormOption,
    SigninFormOptions,
    SigninHeader,
    SigninSvg,
    ErrorMessage,
} from "./style";
import { ChangePage, TextFeild } from "../../styles";

import { ReactComponent as Illustration } from "../../assets/svg/signin.svg";

const Signin = () => {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        const data = {
            email: getValues("email"),
            password: getValues("password"),
        };
        console.log(data);
    };

    return (
        <SigninWrapper>
            <SigninBox>
                <SigninHeader>Sign In</SigninHeader>
                <SigninForm>
                    <TextFeild
                        {...register("email", {
                            required: "do not leave it empty",
                        })}
                        placeholder='Enter your email here'
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                    <TextFeild
                        type='password'
                        {...register("password", {
                            required: "do not leave it empty",
                        })}
                        placeholder='Enter your password here'
                    />
                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                    <SigninFormOptions>
                        <SigninFormOption>Forgot Password ?</SigninFormOption>
                        <SigninFormOption>Reset</SigninFormOption>
                    </SigninFormOptions>
                </SigninForm>
                <ButtonGroup>
                    <ChangePage to='/home' onClick={handleSubmit(onSubmit)}>
                        Log In
                    </ChangePage>
                    <ChangePage to='/register' secondary>
                        Sign Up
                    </ChangePage>
                </ButtonGroup>
            </SigninBox>
            <SigninSvg>
                <Illustration />
            </SigninSvg>
        </SigninWrapper>
    );
};

export default Signin;
