import styled from "styled-components";

type Props = {
    percent: number
}

export const StatisticsWrapper = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.025em;
    color: #9333EA;
`

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 74px;
    height: 74px;
    border-radius: 50%;
    background-image: ${(props:Props) => `linear-gradient(-180deg, #555 ${props.percent}%, #8687E7 ${props.percent}%)`};
    background-repeat:no-repeat
`

export const Percent = styled.p`
    width: 80%;
    height: 80%;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    letter-spacing: -0.025em;
    color: #9333EA;
    border-radius: 50%;
    background: #fff; 

`