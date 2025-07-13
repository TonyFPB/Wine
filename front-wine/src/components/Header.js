import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
  const navigate = useNavigate()
  return (
      <StyledHeader>
          <h1 onClick={()=>navigate('/')}>Wine</h1>
          <h1 onClick={()=>navigate('/busca')}>Buscar Vinhos</h1>
      </StyledHeader>
  )
}

const StyledHeader = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  background: #722F37;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-family: 'Playball', cursiva;
    font-size: 40px;
    color: #FFFFFF;
    cursor: pointer;
  }
`
