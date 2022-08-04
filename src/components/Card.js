import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  max-width: 320px;
  max-height: 135px;
  * {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
  }
`;

const Title = styled.h3`
  width: 112px;
  height: 22px;
  opacity: 0.4;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 130%;
  color: #fff;
  margin-bottom: 20px;
`;

const Link = styled.a.attrs(props => ({
  href: props.href,
  disabled: props.disabled,
    target: "_blank"
}))`
  width: min-content;
  white-space: nowrap;
  display: flex;
  flex-shrink: 2;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 40px;
  background-color: #0062FF;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #004DC9;
  }

  &:active {
    background-color: #003B9A;
  }

  &:focus {
    position: absolute;
    margin: -3px 0 0 -3px;
    border: 3px solid #71A7FF;
  }

  &[disabled] {
    color: rgba(255, 255, 255, 0.3);
    background-color: #3F3F3F;
    pointer-events: none;
  }
`;

const HorizontalSpace = styled.div`
  width: ${props => props.width};
`;

const Card = ({ title, description, linkText, href, leftIcon, rightIcon, disabled }) => {
    const openDocs = (e) => {
        if (typeof(href) === "object" ) href.map(doc => window.open(doc));
    }
  return (
  <StyledCard>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Link onClick={openDocs} href={typeof(href) === "object" ? null: href } disabled={disabled}>
            {leftIcon && <>{leftIcon}<HorizontalSpace width="4px"/></>}
            {linkText}
            {rightIcon && <><HorizontalSpace width="4px"/>{rightIcon}</>}
        </Link>
    </StyledCard>)
};

export default Card;
