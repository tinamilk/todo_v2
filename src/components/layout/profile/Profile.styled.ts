import styled from "styled-components";

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    min-height: 321px;
    width: 70%;
    padding: 16px 19px;
`

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60%;
    justify-content: space-between;

`
export const UserName = styled.div`
    display: flex;
    gap: 5px;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #404040;
`

export const UserEmail = styled.div`
    display: flex;
    gap: 5px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #6B7280;
`

export const UserPhotoWrapper = styled.div`

`

export const ChangeNameInput = styled.input`
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #404040;
    &:focus {
        outline: none;
    }
`

export const ChangeEmailInput = styled.input`
    border: none;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #6B7280;
    &:focus {
        outline: none;
    }
`

export const EditButton = styled.button``

export const UserStatistics = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10%;
`