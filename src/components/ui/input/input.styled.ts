import styled from "styled-components";

type InputProps = {
    isCentered: boolean;
}

export const Input = styled.input`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #6B7280;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    border: none;
    background: #F3F3F3;
    border-radius: 5px;
    padding: 5px 10px;
    text-align: ${(props:InputProps) => props.isCentered ? 'center' : 'left'};

    &:focus {
        outline: none;
    }
`