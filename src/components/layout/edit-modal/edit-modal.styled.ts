import styled from "styled-components";

type UploaderProps = {
    isActive: boolean;
}

export const EditWrapper = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 25px;
    padding: 15px 0;
`
export const Form = styled.form`
    position: relative;
    width: 100%;
`;
export const Input = styled.input`
    visibility: hidden;
    text-align: center;
    position: relative;
    width: 90%;
`;

export const ImageUpload = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props:UploaderProps) => props.isActive ? '#E1C8F9' : '#F5EDFD'};
    border-radius: 10px;
    width: 90%;
    min-height: 200px;
    margin: 0 5%;
`
export const UploadContent = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #9333EA;
`
export const UploadButton = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #F56497;
    &:hover{
        opacity: 0.7;
    }
`

export const AddButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 8px 10px;
    background: #F3F3F3;
    border-radius: 5px;
    width: 90%;
    color: #6B7280;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    gap: 21px;
`

export const DragFileElement = styled.div` 
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`