import styled from "styled-components";

export const SignupWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const SignupBox = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SignupHeader = styled.h1`
    margin: 100px 0;
    font-size: 50px;
    @media (min-width: 800px) {
        margin: 80px 0;
    }
`;
export const SignupForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 40px;
`;
export const ButtonGroup = styled.div`
    margin: 50px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
    @media (min-width: 800px) {
        padding: 0 80px;
    }
`;
export const SignupSvg = styled.div`
    flex: 2;
    display: none;
    @media (min-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ImageFeild = styled.div`
    background-color: transparent;
    border: 10px solid #ffffff;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const UploadLabel = styled.label`
    height: 50px;
    width: 50px;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Upload = styled.input`
    cursor: pointer;
    height: 100%;
    position: absolute;
    z-index: 99;
    font-size: 50px;
    opacity: 0;
    -moz-opacity: 0;
`;

export const Display = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;
export const ErrorMessage = styled.span`
    font-size: 10px;
    color: red;
    font-weight: 700;
`;
