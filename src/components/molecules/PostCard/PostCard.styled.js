import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0 0 70px 0;
`;

const Post = styled.div`
  padding-left: 20px;
`;

const PostTitle = styled.div`
  max-width: 500px;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 10px;
`;

const PostDescription = styled.p`
  margin-bottom: 10px;
`;

const Styled = {
  Container,
  Post,
  PostTitle,
  PostDescription,
};
export default Styled;
