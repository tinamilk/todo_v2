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
    gap: 5px;
`

export const TaskContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
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

export const OptionsButton = styled.button`
    min-width: 30px;
    &:hover {
        background: rgba(147, 51, 234, 0.06);
        border-radius: 5px;
    }
`

export const TaskMenuWrapper = styled.div`
    position: relative;
    display: inline-block;
`

export const TaskMenuContent = styled.div`
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    display: ${(props:ContentProps) => props.isActive ? 'flex' : 'none'};
    overflow: hidden;
    border-radius: 10px;
    left: 550px;
    top: 130px;
`

export const TaskMenuItem = styled.div`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
        background-color: #ddd;
    }
`