import styled from "styled-components";

export const MoreMainWrapp = styled.div`
  display: flex;
  width: 100%;
  gap: 68px;
  margin-top: 42px;
`;

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

export const PostItem = styled.li`
  display: flex;
  gap: 32px;
  cursor: pointer;
`;

export const StyledImg = styled.div`
  width: 200px;
  height: 144px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
`;

export const PostInfoWrapp = styled.div``;

export const Name = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.57;
  color: #3c4563;
`;

export const Avatar = styled.span`
  display: block;
  width: 32px;
  height: 32px;
  margin-right: 16px;
  background-image: ${({ avatar }) => `url(${avatar})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const PostTitle = styled.h4`
  margin-top: 17px;
  font-size: 18px;
  line-height: 1.78;
  text-transform: capitalize;
  color: #1b1c57;
`;

export const CreatedAtText = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  margin-top: 16px;
  font-size: 14px;
  color: #888b97;
`;

export const PostDetailWrapp = styled.div``;

export const PostDescription = styled.p`
  margin-top: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.71;
  color: #626687;
  opacity: 0.75;
`;
