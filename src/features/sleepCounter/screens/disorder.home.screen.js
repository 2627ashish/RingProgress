import React from "react";
import { Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import BackgroundAnimation from "../../../components/BackgroundAnimation";
import { SafeArea } from "../../../components/utility/safe-area.component";
const HomeCard = styled(Card)`
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
`;
const CardHome = styled.View`
  flex-direction: row;
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
`;
const ContentText = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.space[1]};
  margin-bottom: ${(props) => props.theme.space[2]};
  background-color: powderblue;
  text-align: justify;
`;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #2a2a44;
`;
const HomeImage = styled(Image)`
  width: 170px;
  height: 100px;
  margin: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[1]};
`;
const PageHead = styled(Text)`
  color: ${(props) => props.theme.colors.text.inverse};
  text-align: center;
  margin-bottom: ${(props) => props.theme.space[1]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.sizes[2]};
`;
const SubHead = styled(Text)`
  color: ${(props) => props.theme.colors.text.inverse};
  margin: ${(props) => props.theme.space[3]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.sizes[1]};
`;
export const DisorderHomeScreen = () => (
  <Container>
    <SafeArea>
      <PageHead>Drift into Dreams! </PageHead>
      <SubHead>Night Slumber</SubHead>
      <CardHome>
        <HomeImage source={require("../../../../assets/apnea1.jpg")} />
        <HomeImage source={require("../../../../assets/apnea2.jpg")} />
      </CardHome>
      <CardHome>
        <HomeImage source={require("../../../../assets/Sleepapnea.jpg")} />
        <HomeImage source={require("../../../../assets/Sleepapnea.jpg")} />
      </CardHome>
      <HomeCard>
        <ContentText>
          Sleep apnea is a potentially serious sleep disorder in which breathing
          repeatedly stops and starts. If you snore loudly and feel tired even
          after a full night's sleep, you might have sleep apnea.
        </ContentText>
      </HomeCard>
      <BackgroundAnimation />
    </SafeArea>
  </Container>
);
