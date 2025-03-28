import React from "react";

import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from '../components/StatusBarPage';
import { BoxIcon, ButtonLink, ButtonLinkText, ContainerContent, ContainerInput, ContainerLogo, Input, Logo, SubTitle, Title } from './style';

export default function Home() {

   return (  
  <LinearGradient
    colors={["#c7ede8", "#45b5c4"]}
    style={{ flex: 1, justifyContent: "center" }}
  >
      <StatusBarPage 
       barStyle= "light-content"  
       backgroundColor = '#c7ede8'   
      /> 

    
    <ContainerLogo>
      <Logo source = { require('../../assets/images/logo.png')} 
      resizeMode="contain"/>
    </ContainerLogo>

    <ContainerContent>
       <Title>  
         SujeitoLink
        </Title>   
        <SubTitle>
          Cole seu link para encurtar. 
        </SubTitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={23} color="white"  />
          </BoxIcon>
         <Input
          placeholder="Paste your link here..."
          placeholderTextColor={'white'}
         />

      </ContainerInput>

      <ButtonLink>
        <ButtonLinkText>Gerar text </ButtonLinkText>
      </ButtonLink>

    </ContainerContent>

      
    
  </LinearGradient>

   )
}
