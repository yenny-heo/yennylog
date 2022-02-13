import styled from "styled-components";

const Posts = styled.div`
  justify-content: start;
`;

const PostContainer = styled.div`
  display: flex;
  margin: 0 0 70px 0;
`;

const PostLink = styled.div`
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
  Posts,
  PostContainer,
  PostLink,
  PostTitle,
  PostDescription,
};
export default Styled;
