import styled from 'styled-components'

const Picture = styled.img`
  border-radius: 6px;
  width: 20%;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }
`
export default Picture
