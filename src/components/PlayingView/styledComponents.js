import styled from 'styled-components'

export const PlayingContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`

export const ScoreContainer = styled.div`
  background-color: transparent;
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
  border-radius: 8px;
  width: 300px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`

export const Three = styled.div`
  display: flex;
  flex-direction: column;
`
export const Names = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
`
export const ScoreCard = styled.div`
  background-color: #ffffff;
  height: 80px;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
`
export const ScoreName = styled.p`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Bree Serif';
  margin-top: 5px;
`
export const TrueScore = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 5px;
`
export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 60px;
  margin-bottom: 30px;
`
export const Option12 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const OptionButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`
export const OptionImage = styled.img`
  height: 150px;
  width: 150px;
`
export const RulesContainer = styled.div`
  display: flex;
  align-self: flex-end;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  padding: 9px;
`
export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 400px;
  height: 400px;
`
export const PopupCloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  align-self: flex-end;
`
export const PopupImage = styled.img`
  width: 360px;
  height: 300px;
  margin: 20px;
`
export const ResultMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ResultName = styled.p`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 25px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const PlayAgainButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 16px;
  font-family: 'Bree Serif';
  font-size: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
