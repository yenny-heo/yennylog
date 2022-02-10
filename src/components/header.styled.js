import styled from "styled-components";

const Container = styled.header`
  background: #e8cbc0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #636fa4,
    #e8cbc0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #636fa4,
    #e8cbc0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin-bottom: 3rem;
`;

const Header = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 1rem 1.0875rem;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Styled = {
  Container,
  Header,
  Title,
};

export default Styled;
