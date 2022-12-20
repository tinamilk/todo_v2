import styled from "styled-components"

type Props = {
    height: string
}

export const InputGroup = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: ${(props:Props) => props.height};
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    justify-content: space-between;
    margin-top: 30px;
`