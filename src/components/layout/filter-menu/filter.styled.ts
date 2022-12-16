import styled from 'styled-components';

interface ItemProps { isActive : boolean};


export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 141px;
`

export const FilterButtonsWrapper = styled.div`
     display: flex;
    flex-direction: column;
    gap: 21px;
`

export const IconButton = styled.button` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(147, 51, 234, 0.06);
    border-radius: 5px;
    font-family: 'Roboto';
    color: #9333EA;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 8px;
    gap: 10px;
`
