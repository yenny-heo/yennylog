import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  width: 50px;
  height: 60px;
  min-width: 50px;
  min-height: 60px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  text-align: center;
`;

const Month = styled.div`
  background: #f7a09c;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 25px;
  height: 40px;
  line-height: 40px;
  color: #000;
`;

const Styled = {
  Container,
  Month,
  Date,
};

export default Styled;
