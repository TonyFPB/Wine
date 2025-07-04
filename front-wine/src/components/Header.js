import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
  const navigate = useNavigate()
  return (
      <StyledHeader>
          <h1 onClick={()=>navigate('/')}>Wine Taster</h1>
      </StyledHeader>
  )
}

const StyledHeader = styled.div`
    position: fixed;
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
    
    h1{
        font-family: 'Playball', cursiva;
        font-size: 40px;
        color: #FFFFFF;
        cursor: pointer;
    }
`