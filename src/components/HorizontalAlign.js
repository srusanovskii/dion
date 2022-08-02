import React from 'react';
import styled from 'styled-components';

const HorizontalAlign = styled.div`
  width: ${props => props.width};
  display: flex;
  justify-content: space-between;
`;

export default HorizontalAlign;
