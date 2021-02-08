import styled , {css} from 'styled-components'

const Button = styled.button`
  color:white;
  background: ${props =>props.secondary ? '#FED450' : '#f8049c' };
  font-weight:bold;
  ${p => p.large ? css`
    padding:12px;
    border-radius:9px;
    font-size:1.5em;
  
  ` :css`
    padding:8px;
    border-radius:4px;
    font-size:1em;
  `}
  
  box-shadow:none;
  font-family:'Poppins';
  border:none;
  width:100%;
  display:black;
  white-space:none;

  &:disabled{
    background:#eee;
    color:#666;
  }
`

export default  Button;