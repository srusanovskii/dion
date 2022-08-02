import React from 'react';
import styled from 'styled-components';

const PositionAbsolute = styled.div`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;

export default PositionAbsolute;