import {
    SigninBox,
    SigninWrapper,
    Button,
    ButtonGroup,
    SigninForm,
    SigninFormOption,
    SigninFormOptions,
    SigninHeader,
    SigninSvg,
    TextFeild,
} from "./style";

import { ReactComponent as Illustration } from "../../assets/svg/signin.svg";

const Signin = () => {
    return (
        <SigninWrapper>
            <SigninBox>
                <SigninHeader>Sign In</SigninHeader>
                <SigninForm>
                    <TextFeild placeholder='Enter your email here' />
                    <TextFeild placeholder='Enter your password here' />
                    <SigninFormOptions>
                        <SigninFormOption>Forgot Password ?</SigninFormOption>
                        <SigninFormOption>Not registered yet?</SigninFormOption>
                        <SigninFormOption>Reset</SigninFormOption>
                    </SigninFormOptions>
                </SigninForm>
                <ButtonGroup>
                    <Button>Log In</Button>
                    <Button>Sign Up</Button>
                </ButtonGroup>
            </SigninBox>
            <SigninSvg>
                <Illustration />
            </SigninSvg>
        </SigninWrapper>
    );
};

export default Signin;
