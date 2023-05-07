/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Icon } from "../icon/Icon";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { SectionStyled } from "../section/Section.styled";
import { LinkButton } from "../sliders/readyToSellSlider/Slider.styled";
import {
  MoreMainWrapp,
  PostList,
  PostItem,
  StyledImg,
  PostInfoWrapp,
  Name,
  Avatar,
  PostTitle,
  CreatedAtText,
  PostDetailWrapp,
  PostDescription,
} from "./More.styled";
import data from "../../data/sellSlides";

export const More = () => {
  const [indexOfCurrentPost, setIndexOfCurrentPost] = useState(0);

  const handleClick = (index) => {
    setIndexOfCurrentPost(index);
  };
  return (
    <SectionStyled>
      <SectionTitle
        title="Find out more about selling and buying homes"
        subTitle="See tips and trick from our partnership"
        style={{ textAlign: "center", width: "450px", margin: "0 auto" }}
      />
      <LinkButton style={{ width: "86px", margin: "24px auto 0 auto" }}>
        More Artikel
      </LinkButton>
      <MoreMainWrapp>
        <PostList>
          {data.map((item, index) => (
            <PostItem
              key={item.id}
              onClick={() => {
                handleClick(index);
              }}
            >
              <StyledImg />
              <PostInfoWrapp>
                <Name>
                  <Avatar />
                  {item.user.userName}
                </Name>
                <PostTitle>{item.post.postTitle}</PostTitle>
                <CreatedAtText>
                  <span>
                    <Icon name="icon-time-min" width={20} height={20} />
                  </span>
                  {`${item.post.timeForRead} min read | ${item.post.createdAt}`}
                </CreatedAtText>
              </PostInfoWrapp>
            </PostItem>
          ))}
        </PostList>
        <PostDetailWrapp>
          <StyledImg style={{ width: "560px", height: "280px" }} />
          <Name style={{ marginTop: "29px" }}>
            <Avatar />
            {data[indexOfCurrentPost].user.userName}
          </Name>
          <a href="#" style={{ textDecoration: "none" }}>
            <PostTitle style={{ fontSize: "24px", lineHeight: "1.33" }}>
              {data[indexOfCurrentPost].post.postTitle}
            </PostTitle>
          </a>

          <PostDescription>
            {data[indexOfCurrentPost].post.postDescription}
          </PostDescription>
          <CreatedAtText>
            <span>
              <Icon name="icon-time-min" width={20} height={20} />
            </span>
            {`${data[indexOfCurrentPost].post.timeForRead} min read | ${data[indexOfCurrentPost].post.createdAt}`}
          </CreatedAtText>
        </PostDetailWrapp>
      </MoreMainWrapp>
    </SectionStyled>
  );
};
