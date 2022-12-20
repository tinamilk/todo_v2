import styled from 'styled-components';

interface ItemProps { gap: string };


export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    /* gap: 141px; */
    gap: ${(props:ItemProps) => props.gap};
    height: 100%;
`

export const MenuButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
`
