import React from 'react'
import styled from 'styled-components'

export const Picture = props => <PictureWrapper {...props} />

const PictureWrapper = styled.img`
  border-radius: 6px;
  width: 20%;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }
`
