import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Pretendard_black from "./Pretendard-black.otf";
import Pretendard_Bold from "./Pretendard-bold.otf";
import Pretendard_ExtraBold from "./Pretendard-ExtraBold.otf";
import Pretendard_ExtraLight from "./Pretendard-ExtraLight.otf";
import Pretendard_Light from "./Pretendard-Light.otf";
import Pretendard_Medium from "./Pretendard-Medium.otf";
import Pretendard_Regular from "./Pretendard-Regular.otf";
import Pretendard_Semibold from "./Pretendard-Semibold.otf";
import Pretendard_Thin from "./Pretendard-Thin.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:'Pretendard';
    font-weight:400;
    font-display:swap;
    src:local('Pretendard_black'), url(${Pretendard_black}) format("otf"),
    url(${Pretendard_black}) format("otf")
  }
  @font-face {
    font-family:'Pretendard';
    font-weight:700;
    font-display:swap;
    src:local('Pretendard_Bold'), url(${Pretendard_Bold}) format("otf"),
    url(${Pretendard_Bold}) format("otf")
  }
  @font-face {
    font-family:'Pretendard';
    font-weight:700;
    font-display:swap;
    src:local('Pretendard_ExtraBold'), url(${Pretendard_ExtraBold}) format("otf"),
    url(${Pretendard_ExtraBold}) format("otf")
  }
  @font-face {
    font-family:'Pretendard';
    font-weight:500;
    font-display:swap;
    src:local('Pretendard_ExtraLight'), url(${Pretendard_ExtraLight}) format("otf"),
    url(${Pretendard_ExtraLight}) format("otf")
  }
  @font-face {
    font-family:'Pretendard';
    font-weight:400;
    font-display:swap;
    src:local('Pretendard_Light'), url(${Pretendard_Light}) format("otf"),
    url(${Pretendard_Light}) format("otf")
  }
      @font-face {
    font-family:'Pretendard';
    font-weight:500;
    font-display:swap;
    src:local('Pretendard_Medium'), url(${Pretendard_Medium}) format("otf"),
    url(${Pretendard_Medium}) format("otf")
  }
  @font-face {
    font-family:'Pretendard';
    font-weight:400;
    font-display:swap;
    src:local('Pretendard_Regular'), url(${Pretendard_Regular}) format("otf"),
    url(${Pretendard_Regular}) format("otf")
  }
          @font-face {
    font-family:'Pretendard';
    font-weight:500;
    font-display:swap;
    src:local('Pretendard_Semibold'), url(${Pretendard_Semibold}) format("otf"),
    url(${Pretendard_Semibold}) format("otf")
  }
  @font-face {
    font-family:'Pretendard';
    font-weight:400;
    font-display:swap;
    src:local('Pretendard_Thin'), url(${Pretendard_Thin}) format("otf"),
    url(${Pretendard_Thin}) format("otf")
  }
  ${reset}
`;

export default GlobalStyle;
