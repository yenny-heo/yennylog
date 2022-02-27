import React from "react";
import Styled from "./DateCalendar.styled";

const DateCalendar = ({ ddmmmyyyy }) => {
  const [dd, mmm, yyyy] = ddmmmyyyy.split(" ");
  return (
    <Styled.Container>
      <Styled.Year>
        &#123;<span>{yyyy}</span>&#125;
      </Styled.Year>
      <Styled.Calendar>
        <Styled.Month>{mmm.toUpperCase()}</Styled.Month>
        <Styled.Date>{dd}</Styled.Date>
      </Styled.Calendar>
    </Styled.Container>
  );
};
export default DateCalendar;
