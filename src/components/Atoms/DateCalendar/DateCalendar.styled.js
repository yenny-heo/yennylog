import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  width: 33px;
  height: 40px;
  min-width: 30px;
  min-height: 40px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  text-align: center;
`;

const Month = styled.div`
  background: #f7a09c;
  height: 15px;
  line-height: 15px;
  font-size: 10px;
  color: #fff;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 17px;
  height: 25px;
  line-height: 25px;
  color: #000;
`;

const Styled = {
  Container,
  Month,
  Date,
};

export default Styled;
