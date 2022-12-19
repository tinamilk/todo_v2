import styled from 'styled-components';
type ContentProps = {
    isActive: boolean
}

export const TaskWrapper = styled.div`
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
`;

export const TaskDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 5px;
`

export const TaskContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

export const TaskTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const TaskImage = styled.img``

export const TaskDate = styled.p`
    color: #6B7280;
    font-family: 'Roboto';
    font-size: 14px;
`;

export const TaskName = styled.p`
    color: #404040;
    font-family: 'Roboto';
    font-weight: 600;
`;

export const OptionsContainer = styled.div`
    position: relative;
`

export const OptionsButton = styled.button`
    min-width: 30px;
    max-height: 30px;
    margin-left: 20%;
    &:hover {
        background: rgba(147, 51, 234, 0.06);
        border-radius: 50%;
    }
`

export const TaskMenuWrapper = styled.div`
    display: inline-block;
`

export const TaskMenuContent = styled.div`
    position: absolute;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    display: ${(props:ContentProps) => props.isActive ? 'flex' : 'none'};
    overflow: hidden;
    border-radius: 10px;
    width: 58px;
    height: 33px;
    left: -70px;
    top: 30px;
`

export const TaskMenuItem = styled.div`
    color: black;
    text-decoration: none;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #ddd;
    }
`

export const Checkbox = styled.button`
    &:hover {
        opacity: 0.7;
    }
`