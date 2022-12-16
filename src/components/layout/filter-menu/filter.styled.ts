import styled from 'styled-components';

interface ItemProps { isActive : boolean};


export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
`

export const IconButton = styled.button` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
