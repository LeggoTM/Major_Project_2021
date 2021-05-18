import styled, { css } from "styled-components";

export const Button = styled.div`
    background: #ffffff;
    color: #000000;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    ${({ secondary }) =>
        secondary &&
        css`
            background: transparent;
            border: 2px solid #ffffff;
            color: #ffffff;
        `}
`;
export const TextFeild = styled.input`
    margin: 10px 0;
    padding: 20px 20px;
    width: 100%;
    border: 2px solid #ffffff;
    border-radius: 50px;
    background-color: transparent;
    font-size: 14px;
    color: #ffffff;
    &::placeholder {
        font-size: 14px;
        color: #ffffff;
    }
    &:focus {
        outline: none;
        background-color: #ffffff;
        color: #000000;
    }
`;
