import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '../../components/common/Box';
import CountdownBackground from '../../assets/images/countdown-bg.jpg';

const CountdownTimer = () => {
  console.log('countdown timer');
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date('December 25, 2022').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const sec = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop the timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(sec);
      }
    });
  };

  useEffect(() => {
    startTimer();
  })

  return (
    <WrapperStyled>
      <Box>
        <ContentsStyled>
          <ContentTitleStyled>Christmas Sale</ContentTitleStyled>
          <ContentSubtitleStyled>save up to 50%</ContentSubtitleStyled>
      
          <CountdownWrapperStyled>
            <TimerWrapperStyled>
              <TimeStyled>{timerDays}</TimeStyled>
              <LabelStyled>Days</LabelStyled>
            </TimerWrapperStyled>

            <TimerWrapperStyled>
              <TimeStyled>{timerHours}</TimeStyled>
              <LabelStyled>Hrs</LabelStyled>
            </TimerWrapperStyled>

            <TimerWrapperStyled>
              <TimeStyled>{timerMinutes}</TimeStyled>
              <LabelStyled>Mins</LabelStyled>
            </TimerWrapperStyled>

            <TimerWrapperStyled>
              <TimeStyled>{timerSeconds}</TimeStyled>
              <LabelStyled>Sec</LabelStyled>
            </TimerWrapperStyled>
          </CountdownWrapperStyled>
        </ContentsStyled>
      </Box>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.section`
  height: 450px;
  background: linear-gradient(
      252deg,
      rgba(17, 36, 50, 0.37016805013020837) 0%,
      rgba(17, 36, 50, 0.3001400389257265) 100%
    ),
    url(${CountdownBackground}) no-repeat;
  background-size: cover;
`;

const ContentsStyled = styled.section`
  width: 100%;
  max-width: 450px;
  margin-left: auto;
  margin-top: 5em;
  text-align: center;
`;

const ContentTitleStyled = styled.h2(
  ({ theme }) => `
    font-size: ${theme.fs_scale7};
    color: #fae100;
  `
);

const ContentSubtitleStyled = styled.p`
  ${({ theme }) => `
     font-size: ${theme.fs_scale4};
     font-weight: ${theme.bold};
     color: ${theme.text.light};
  `}

  text-transform: uppercase;
  margin-block: 0.7em;
`;

const CountdownWrapperStyled = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-block: 1em;
`;

const TimerWrapperStyled = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  outline: 3px solid #112432;
  background: #e1dad2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LabelStyled = styled.small(
  ({ theme }) => `
  font-size: ${theme.fs_scale1};
  text-transform: capitalize;
  color: ${theme.text.accent};
  `
);

const TimeStyled = styled.p(
  ({ theme }) => `
  font-size: ${theme.fs_scale4};
  font-weight: ${theme.bold};
  color: ${theme.text.dark};
 `
);
export default CountdownTimer;
