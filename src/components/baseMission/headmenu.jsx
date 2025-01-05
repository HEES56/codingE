/* 
1. manu button
 보고있는 페이지는 투명도 0 || 0.5 
2. user
 로그인 한 유저의 name
3. loginBtn
 login ? "로그아웃" || "로그인"
 backgroundColor : "#5F52FF"
 color : "#FFFFFF"
*/

import styled from "styled-components";
import { useState, useEffect } from "react";
import menu1img from "./img/🎯.png";
import menu2img from "./img/🙋_♀️.png";
import menu3img from "./img/🌊.png";
import menu4img from "./img/📚.png";

const Containor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1080px;
  padding-bottom: 50px;
  border-bottom: 1px solid #eaeaec;
  gap: 10px;
`;

const MenuBox = styled.div`
  display: flex;
  gap: 46px;
`;

const LoginUserbox = styled.div`
  display: flex;
  gap: 19px;
`;

const LogImg = styled.img`
  width: 28px;
  height: 28px;
`;

const TextUserBox = styled.span`
  font-size: 24px;
  font-weight: 700;
  white-space: nowrap;
`;

const P = styled.span`
  font-size: 24px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonOn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: none;
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  gap: 10px;
  padding: 0px;
  width: 145px;
  white-space: nowrap;
`;

const ButtonOff = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: none;
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  gap: 10px;
  padding: 0px;
  width: 145px;
  white-space: nowrap;
  opacity: 0.3;
`;

const LogBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5f52ff;
  border: none;
  border-radius: 12px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  width: 100px;
  padding: 8px 16px;
  white-space: nowrap;
`;

export function Menu({ menu1, menu2, menu3, menu4, user, loginBtn }) {
  const [menuStates, setMenuStates] = useState([true, false, false, false]);

  const handleMenu = (index) => {
    setMenuStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <>
      <Containor>
        <MenuBox>
          {[menu1, menu2, menu3, menu4].map((menu, index) => {
            const MenuButton = menuStates[index] ? ButtonOn : ButtonOff;
            return (
              <MenuButton key={index} onClick={() => handleMenu(index)}>
                <LogImg
                  src={[menu1img, menu2img, menu3img, menu4img][index]}
                  alt="menu image"
                />
                {menu}
              </MenuButton>
            );
          })}
        </MenuBox>

        <LoginUserbox>
          <P>
            <TextUserBox>{user}</TextUserBox>님
          </P>
          <LogBtn>{loginBtn}</LogBtn>
        </LoginUserbox>
      </Containor>
    </>
  );
}
