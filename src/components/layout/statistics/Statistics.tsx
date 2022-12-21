import { Circle, Percent, StatisticsWrapper, Title } from "./Statistics.styled";

type Props = {
  title: string;
  percent: number;
};

export const Statistics = ({ title, percent }: Props) => {
  return (
    <StatisticsWrapper>
      <Title>{title}</Title>
      <Circle percent={percent}>
        <Percent>%</Percent>
      </Circle>
    </StatisticsWrapper>
  );
};
