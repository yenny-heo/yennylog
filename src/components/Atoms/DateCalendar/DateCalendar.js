import React from "react";
import Styled from "./DateCalendar.styled";

const DateCalendar = ({ ddmmmyyyy }) => {
  const [dd, mmm, yyyy] = ddmmmyyyy.split(" ");
  return (
    <Styled.Container>
      <Styled.Month>{mmm.toUpperCase()}</Styled.Month>
      <Styled.Date>{dd}</Styled.Date>
    </Styled.Container>
  );
};
export default DateCalendar;
