import styled from "styled-components";

export const SigninWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const SigninBox = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SigninHeader = styled.h1`
    margin: 100px 0;
    font-size: 50px;
    @media (min-width: 800px) {
        margin: 80px 0;
    }
`;
export const SigninForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 40px;
`;
export const SigninFormOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;
export const SigninFormOption = styled.div`
    cursor: pointer;
`;
export const ButtonGroup = styled.div`
    margin: 70px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
    @media (min-width: 800px) {
        padding: 0 80px;
    }
`;
export const SigninSvg = styled.div`
    flex: 2;
    display: none;
    @media (min-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const ErrorMessage = styled.span`
    font-size: 10px;
    color: red;
    font-weight: 700;
`;
