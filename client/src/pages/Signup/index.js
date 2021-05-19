import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import {
    SignupBox,
    SignupWrapper,
    ButtonGroup,
    SignupForm,
    SignupHeader,
    SignupSvg,
    ImageFeild,
    Upload,
    UploadLabel,
    Display,
    ErrorMessage,
} from "./style";
import { Button, ChangePage, TextFeild } from "../../styles";
import { ReactComponent as Illustration } from "../../assets/svg/signup.svg";

const Signup = () => {
    const history = useHistory();
    const [image, setImage] = useState(null);
    const {
        register,
        getValues,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const password = watch("password");

    const handleImageChange = () => {
        try {
            setImage(URL.createObjectURL(getValues("profile_picture")[0]));
        } catch (e) {
            setImage(null);
        }
    };

    const onSubmit = () => {
        const data = new FormData();
        data.append("first_name", getValues("first_name"));
        data.append("last_name", getValues("last_name"));
        data.append("email", getValues("email"));
        data.append("password", getValues("password"));
        data.append("phone_no", getValues("phone_no"));
        data.append("profile_picture", getValues("profile_picture"));

        fetch("http://localhost:8000/api/user/sign-up", {
            method: "post",
            body: data,
        })
            .then((response) => response.json())
            .then((data) => alert(data.msg))
            .then(() => history.push("/"))
            .catch((err) => console.log(err));
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
                        {...register("first_name", {
                            required: "You must give first name",
                        })}
                        placeholder='Enter your first name here'
                    />
                    {errors.first_name && (
                        <ErrorMessage>{errors.first_name.message}</ErrorMessage>
                    )}
                    <TextFeild
                        {...register("last_name", {
                            required: "You must give last name",
                        })}
                        placeholder='Enter your last name here'
                    />
                    {errors.last_name && (
                        <ErrorMessage>{errors.last_name.message}</ErrorMessage>
                    )}
                    <TextFeild
                        {...register("email", {
                            required: "You must spacify email",
                        })}
                        placeholder='Enter your email here'
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                    <TextFeild
                        type='password'
                        {...register("password", {
                            required: "You must spacify password",
                        })}
                        placeholder='Enter your password here'
                    />
                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                    <TextFeild
                        type='password'
                        {...register("re_password", {
                            validate: (value) =>
                                value === password ||
                                "The passwords do not match",
                            required: "You must re-enter email",
                        })}
                        placeholder='Enter your password again'
                    />
                    {errors.re_password && (
                        <ErrorMessage>
                            {errors.re_password.message}
                        </ErrorMessage>
                    )}
                    <TextFeild
                        {...register("phone_no", {
                            required: "You must spacify your phone number",
                        })}
                        placeholder='Enter your phone number here'
                    />
                    {errors.phone_no && (
                        <ErrorMessage>{errors.phone_no.message}</ErrorMessage>
                    )}
                </SignupForm>
                <ButtonGroup>
                    <Button to='/' onClick={handleSubmit(onSubmit)}>
                        Sign Up
                    </Button>
                    <ChangePage to='/' secondary>
                        Log In
                    </ChangePage>
                </ButtonGroup>
            </SignupBox>
        </SignupWrapper>
    );
};

export default Signup;
