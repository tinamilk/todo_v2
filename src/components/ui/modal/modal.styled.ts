import styled from "styled-components";
type ModalProps = { isActive : boolean};

export const ModalWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props:ModalProps) => props.isActive ? 1 : 0};
    z-index: ${(props:ModalProps) => props.isActive ? 99 : 'auto'};
    pointer-events: ${(props:ModalProps) => props.isActive ? 'all' : 'none'};
    transition: 0.5s;
`

export const ModalContainer = styled.div`
    opacity: 1;
    z-index: 99999;
    pointer-events: all;
    min-width: 50%;
    /* height: 20%; */
    background-color: #fff;
    border-radius: 10px;
`
export const ModalHeadingWrapper = styled.div`
    width: 100%;
    min-height: 20%;
    background: linear-gradient(259.86deg, #F5EDFD 0%, #FEEFF5 85.32%);
    border-radius: 10px 10px 0px 0px;
    padding: 10px;
`

export const ModalHeading = styled.p`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #9333EA;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ModalButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`