import { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";

import {
    SignupBox,
    SignupWrapper,
    ButtonGroup,
    SignupForm,
    SignupFormOption,
    SignupFormOptions,
    SignupHeader,
    SignupSvg,
    ImageFeild,
    Upload,
    UploadLabel,
    Display,
} from "./style";
import { Button, TextFeild } from "../../styles";
import { ReactComponent as Illustration } from "../../assets/svg/signup.svg";

const Signup = () => {
    const [image, setImage] = useState(null);
    const { register, getValues } = useForm();

    const handleImageChange = () => {
        try {
            setImage(URL.createObjectURL(getValues("profile_picture")[0]));
        } catch (e) {
            setImage(null);
        }
    };

    return (
        <SignupWrapper>
            <SignupSvg>
                <Illustration />
            </SignupSvg>
            <SignupBox>
                <SignupHeader>Sign Up</SignupHeader>
                <SignupForm>
                    <ImageFeild>
                        {image ? <Display src={image} /> : null}
                        <UploadLabel>
                            <FiUpload color='#000' size={30} />
                            <Upload
                                {...register("profile_picture")}
                                onChange={handleImageChange}
                                type='file'
                                accept='.png, .jpg, .jpeg'
                            />
                        </UploadLabel>
                    </ImageFeild>
                    <TextFeild
                        {...register("first_name")}
                        placeholder='Enter your first name here'
                    />
                    <TextFeild
                        {...register("last_name")}
                        placeholder='Enter your last name here'
                    />
                    <TextFeild
                        {...register("email")}
                        placeholder='Enter your email here'
                    />
                    <TextFeild
                        {...register("password")}
                        placeholder='Enter your password here'
                    />
                    <TextFeild
                        {...register("re_password")}
                        placeholder='Enter your password again'
                    />
                    <TextFeild
                        {...register("phone_no")}
                        placeholder='Enter your phone number here'
                    />
                    <SignupFormOptions>
                        <SignupFormOption>
                            Already registered ?
                        </SignupFormOption>
                    </SignupFormOptions>
                </SignupForm>
                <ButtonGroup>
                    <Button>Log In</Button>
                    <Button secondary>Sign Up</Button>
                </ButtonGroup>
            </SignupBox>
        </SignupWrapper>
    );
};

export default Signup;
