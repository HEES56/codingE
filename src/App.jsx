import { Menu } from "./components/baseMission/headmenu.jsx";
import { MissionStatus } from "./components/todayMission/missoinstatus.jsx";
import { UsereStatus } from "./components/baseMission/userestatus.jsx";
import { Footer } from "./components/baseMission/footer.jsx";
import styled from "styled-components";
import { useState } from "react";

const Containor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
`;

const CenterMid = styled.div`
  display: flex;
  width: 1080px;
  height: 606.5px;
  padding: 60px 0 108.5px;
  gap: 110px;
`;

const EndFooter = styled.div`
  display: flex;
`;

function App() {
  const [pointCount, setPointCount] = useState(0);
  const [answerCount, setAnswerCount] = useState(12);
  const [commentCount, setCommentCount] = useState(34);
  return (
    <>
      <Containor>
        <Head>
          <Menu
            menu1="오늘의 미션"
            menu2="주제 던지기"
            menu3="코지 바다"
            menu4="개념 공부"
            user="김희성"
            loginBtn="로그아웃"
          />
        </Head>

        <CenterMid>
          <UsereStatus
            answerTitle="질문에 답한 수"
            answerCount={answerCount}
            commentTitle="댓글 단 수"
            commentCount={commentCount}
            pointCount={pointCount}
          />

          <MissionStatus
            missionTitle="오늘의 미션을 수행하고 포인트를 얻어보세요!"
            mission1="출석체크 미션"
            mission2="주제 답글 미션"
            mission3="공부 인증하기 미션"
            mission4="질문에 답변해보기"
            missionSubT="+10P 획득!"
            missionSubF="아직 안했어요"
            setPointCount={setPointCount}
          />
        </CenterMid>

        <EndFooter>
          <Footer
            footer1="게더타운 채널"
            footer2="슬렉 채널"
            footer3="강의자료 모음집"
          />
        </EndFooter>
      </Containor>
    </>
  );
}

export default App;
