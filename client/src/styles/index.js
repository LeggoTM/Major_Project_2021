import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ChangePage = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: #ffffff;
    color: #000000;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: bold;
    ${({ secondary }) =>
        secondary &&
        css`
            background: transparent;
            border: 2px solid #ffffff;
            color: #ffffff;
        `};
`;
export const Button = styled.button`
    cursor: pointer;
    background: #ffffff;
    color: #000000;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: bold;
    ${({ secondary }) =>
        secondary &&
        css`
            background: transparent;
            border: 2px solid #ffffff;
            color: #ffffff;
        `};
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
