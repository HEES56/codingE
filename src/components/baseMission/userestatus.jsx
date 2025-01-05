import styled from "styled-components";
import codingsImg from "./img/Frame 17.png";
import { useState, useEffect } from "react";
import { MissionStatus } from "../todayMission/missoinstatus";

const Containor = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 606.5px;
  gap: 36px;
`;

const Codings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding-bottom: 12px;
`;

const CodingsStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CodingLevel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  padding: 24px 20px;
  border: 1px solid #eaeaec;
  border-radius: 12px;
  text-align: left;
  white-space: nowrap;
  margin: 0px;
`;

const GrayText = styled.text`
  color: #9797a0;
`;

const CountStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  gap: 10px;
`;

const CodingEmotion = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 10px 20px;
  border: 1px solid #eaeaec;
  border-radius: 30px;
  white-space: nowrap;
`;

const CodingImg = styled.img`
  width: 211px;
  height: 220px;
`;

const CodingLevelText = styled.text``;

const Progress = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 20px;
  background-color: #d9d9d9;
`;

const Dealt = styled.div`
  background-color: #5f52ff;
  width: ${(props) => props.codingGauge}%;
  border-radius: 20px;
  height: 100%;
`;

const UserStatus = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  padding: 17px 18px;
  width: 100%;
  border: 1px solid #eaeaec;
  border-radius: 30px;
  white-space: nowrap;
`;

const UserStatusCount = styled.text`
  color: #5f52ff;
`;

/* 
미션의 여부에 따른 상태 변경
1. 코딩의 emotion text
0~19 : "발걸음 때는 중!"
20~39 : "조금씩 뛰는 중!"
40~59 : "성장 중!"
60~79 : "빠르게 달리는 중!"
80~99 : "코딩이 몸에서 빛이!"
2. 코딩이 status
 코딩이 학습 레벨 게이지 = 100P ? "Lv. 2 어쩌구 상태" || "Lv. 1 아기 코딩이 상태"
3. 코딩이 학습 레벨
 if ("기존 포인트" = 100)  {"기존 포인트 = 0, 게이지=0 "}
4. 질문에 답한 수
 답한 수 증가 = 횟수 증가
5. 댓글 단 수
 댓글 단것 확인 = 횟수 증가
*/

export function UsereStatus({
  answerTitle,
  answerCount,
  commentTitle,
  commentCount,
  pointCount,
}) {
  const [emotionText, setEmotionText] = useState("");
  const [codingGauge, setCodingGauge] = useState(0);

  useEffect(() => {
    const num = Number(answerCount) + Number(commentCount) / 10 + pointCount;
    const maxNum = 100;
    console.log(answerCount);
    console.log(commentCount);
    setCodingGauge(Math.floor((num / maxNum) * 100));
    return console.log(codingGauge);
  }, [answerCount, commentCount, pointCount]);

  useEffect(() => {
    if (codingGauge < 20) {
      return setEmotionText("발걸음 때는 중!");
    } else if (codingGauge < 40) {
      return setEmotionText("조금씩 뛰는 중!");
    } else if (codingGauge < 60) {
      return setEmotionText("조금씩 뛰는 중!");
    } else if (codingGauge < 80) {
      return setEmotionText("빠르게 달리는 중!");
    } else {
      return setEmotionText("코딩이 몸에서 빛이!");
    }
  }, [codingGauge]);
  // const emotionText = "발걸음 때는 중!";

  return (
    <Containor>
      <Codings>
        <CodingEmotion>{emotionText}</CodingEmotion>
        <CodingImg src={codingsImg} />
      </Codings>

      <CodingsStatus>
        <CodingLevel>
          <CodingLevelText>코딩이 학습 레벨</CodingLevelText>
          <Progress>
            <Dealt codingGauge={codingGauge} />
          </Progress>
          <CodingLevelText>
            {codingGauge}
            <GrayText>/100p</GrayText>
          </CodingLevelText>
        </CodingLevel>

        <CountStatus>
          <UserStatus>
            {answerTitle}{" "}
            <div>
              <UserStatusCount>{answerCount}</UserStatusCount>회
            </div>
          </UserStatus>
          <UserStatus>
            {commentTitle}{" "}
            <div>
              <UserStatusCount>{commentCount}</UserStatusCount>회
            </div>
          </UserStatus>
        </CountStatus>
      </CodingsStatus>
    </Containor>
  );
}
