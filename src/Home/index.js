import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Modal, Platform, TouchableWithoutFeedback } from "react-native";
import ModalLinks from '../../components/ModalLinks/index';

import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from "../components/StatusBarPage";
import {
  BoxIcon,
  ButtonLink,
  ButtonLinkText,
  ContainerContent,
  ContainerInput,
  ContainerLogo,
  Input,
  Logo,
  SubTitle,
  Title,
} from "./style";



export default function Home() {


  const [input, setInput] = useState('');

  function handleShortLink()
  {
    //alert('URL DIGITADA: '+input)
     
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#c7ede8", "#45b5c4"]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBarPage barStyle="light-content" backgroundColor="#c7ede8" />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ContainerLogo>
            <Logo
              source={require("../../assets/images/logo.png")}
              resizeMode="contain"
            />
          </ContainerLogo>

          <ContainerContent>
            <Title>SujeitoLink</Title>
            <SubTitle>Cole seu link para encurtar.</SubTitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={23} color="white" />
              </BoxIcon>
              <Input
                placeholder="Paste your link here..."
                placeholderTextColor={"white"}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={(text) => setInput (text)}
              />
            </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
              <ButtonLinkText>Gerar texto</ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={true} transparent animationType="slide">

          <ModalLinks/>

        </Modal>


      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}