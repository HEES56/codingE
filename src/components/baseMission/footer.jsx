/* 
1. backroundColor :" #F7F7F8"
2. color :"#82828D"
*/

import styled from "styled-components";

const Containor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding-bottom: 60px;
`;

const FooterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  font-size: 18px;
  font-weight: 600;
  color: #82828d;
  background-color: #f7f7f8;
  border: none;
  border-radius: 70px;
`;

export function Footer({ footer1, footer2, footer3 }) {
  return (
    <Containor>
      <FooterBtn>{footer1}</FooterBtn>
      <FooterBtn>{footer2}</FooterBtn>
      <FooterBtn>{footer3}</FooterBtn>
    </Containor>
  );
}
