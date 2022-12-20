import styled from 'styled-components';

type ButtonProps = {
    buttonType: 'default' | 'grey' | 'red'
}

const buttonColors = {
    default: {
        background: 'rgba(147, 51, 234, 0.06);',
        color: '#9333EA'
    },
    grey: {
        background: 'rgba(107, 114, 128, 0.06);',
        color: '#6B7280'
    },
    red: {
        background: 'rgba(245, 100, 151, 0.06);',
        color: '#F56497'
    },
}

export const IconButton = styled.button` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 180px;
    background: ${(props:ButtonProps) => buttonColors[props.buttonType].background};
    border-radius: 5px;
    font-family: 'Roboto';
    color: ${(props:ButtonProps) => buttonColors[props.buttonType].color};
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 8px;
    gap: 10px;
    &:hover {
        opacity: 0.7;
    }

`