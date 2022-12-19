import styled from 'styled-components';

interface ItemProps { isActive : boolean};


export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 141px;
`

export const FilterButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
`
