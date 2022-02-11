import styled from "styled-components";

const Posts = styled.div`
  justify-content: start;
`;

const Container = styled.div`
  display: flex;
  margin: 0 0 20px 0;
`;

const Post = styled.div`
  padding-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const PostTitle = styled.div`
  max-width: 500px;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 10px;
`;

const PostDescription = styled.p``;

const Styled = {
  Posts,
  Container,
  Post,
  PostTitle,
  PostDescription,
};
export default Styled;
