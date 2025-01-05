/*
미션 성공의 여부
1. icon
 missionStatus === true ? src="./img/checkbox-circle-fill.png" || src="./img/close-circle-fill.png"
2. mission sub text

3. backgroundColor
 missionStatus ? "#F0EFFF" || "#F7F7F8"
*/

import styled from "styled-components";
import checkboxImg from "./img/checkbox-circle-fill.png";
import closekboxImg from "./img/close-circle-fill.png";
import { useState, useEffect } from "react";
import { UsereStatus } from "../baseMission/userestatus";

const MissionWhetherImg = styled.img`
  width: 33.33px;
  height: 33.33px;
  top: 3.33px;
  left: 3.33px;
`;

const MissionBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 680px;
  height: 576px;
  gap: 40px;
  padding-bottom: 30.5px;
  white-space: nowrap;
`;

const Title = styled.text`
  font-size: 24px;
  font-weight: 700;
  white-space: nowrap;
`;

const MissionContent = styled.div`
  display: flex;
  width: 100%;
  height: 240px;
  gap: 20px;
`;

const MissionSuccess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0efff;
  border-radius: 20px;
  gap: 10px;
  padding: 54px 67px;
`;

const MissionFail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f8;
  border-radius: 20px;
  gap: 10px;
  padding: 54px 64px;
`;

const MissionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 196px;
  gap: 10px;
`;

const MissionWhetherTitle = styled.text`
  font-size: 28px;
  font-weight: 700;
  color: #000000;
`;

const MissionWhetherTextT = styled.text`
  font-size: 20px;
  font-weight: 600;
  color: #5f52ff;
`;

const MissionWhetherTextF = styled.text`
  font-size: 20px;
  font-weight: 600;
  color: #acacb3;
`;

export function MissionStatus({
  missionTitle,
  mission1,
  mission2,
  mission3,
  mission4,
  missionSubT,
  missionSubF,
  setPointCount,
}) {
  const [missionStates, setMissionStates] = useState([
    true,
    false,
    false,
    true,
  ]);

  useEffect(() => {
    const completedMissions = missionStates.filter((state) => state).length;
    const totalPoints = completedMissions * 10;
    setPointCount(totalPoints);
  }, [missionStates]);

  const handleMission = (index) => {
    setMissionStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <>
      <MissionBody>
        <div>
          <Title>{missionTitle}</Title>
        </div>

        <MissionContent>
          {[mission1, mission2].map((mission, index) => {
            const isCompleted = missionStates[index];
            return (
              <div
                key={index}
                onClick={() => handleMission(index)}
                style={{ cursor: "pointer" }}
              >
                {isCompleted ? (
                  <MissionSuccess>
                    <MissionBox>
                      <MissionWhetherImg src={checkboxImg} alt="Completed" />
                      <MissionWhetherTitle>{mission}</MissionWhetherTitle>
                    </MissionBox>
                    <MissionWhetherTextT>+10 P 획득!</MissionWhetherTextT>
                  </MissionSuccess>
                ) : (
                  <MissionFail>
                    <MissionBox>
                      <MissionWhetherImg
                        src={closekboxImg}
                        alt="Not Completed"
                      />
                      <MissionWhetherTitle>{mission}</MissionWhetherTitle>
                    </MissionBox>
                    <MissionWhetherTextF>아직 안했어요</MissionWhetherTextF>
                  </MissionFail>
                )}
              </div>
            );
          })}
        </MissionContent>

        <MissionContent>
          {[mission3, mission4].map((mission, index) => {
            const actualIndex = index + 2; // 두 번째 그룹은 인덱스를 2부터 시작
            const isCompleted = missionStates[actualIndex];

            return (
              <div
                key={actualIndex}
                onClick={() => handleMission(actualIndex)}
                style={{ cursor: "pointer" }}
              >
                {isCompleted ? (
                  <MissionSuccess>
                    <MissionBox>
                      <MissionWhetherImg src={checkboxImg} alt="Completed" />
                      <MissionWhetherTitle>{mission}</MissionWhetherTitle>
                    </MissionBox>
                    <MissionWhetherTextT>{missionSubT}</MissionWhetherTextT>
                  </MissionSuccess>
                ) : (
                  <MissionFail>
                    <MissionBox>
                      <MissionWhetherImg
                        src={closekboxImg}
                        alt="Not Completed"
                      />
                      <MissionWhetherTitle>{mission}</MissionWhetherTitle>
                    </MissionBox>
                    <MissionWhetherTextF>{missionSubF}</MissionWhetherTextF>
                  </MissionFail>
                )}
              </div>
            );
          })}
        </MissionContent>
      </MissionBody>
    </>
  );
}
