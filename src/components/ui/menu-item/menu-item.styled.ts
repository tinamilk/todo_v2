import styled from 'styled-components';
import propTypes from 'prop-types';
type ItemProps = { isActive : boolean};


export const MenuItemWrapper = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props:ItemProps) => props.isActive ? 'rgba(147, 51, 234, 0.06)' : 'none'};
    gap: 10px;
    color: #9333EA;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    min-width: 185px;
    height: 40px;
    border-radius: 5px;
    &:hover {
        background: rgba(147, 51, 234, 0.06);
        border-radius: 5px;
    }
`;

export const Icon = styled.img`
    height: 24px;
    width: 24px;
` 