import styled from 'styled-components/native';

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px; 
`;

export const ContainerContent = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 35px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding-bottom: 20px;
`;

export const ContainerInput = styled.View`
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin: 10px auto;
  border-radius: 7px;
  padding-left: 0px;
  padding-right: 0px;
`;

export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center; /* Corrigido */
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.24);
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.24);
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  color: #fff;
  font-size: 17px;
  
`;


export const ButtonLink = styled.TouchableOpacity`
   align-items: center;
  justify-content: center;]
  height: 45px;
  background-color: #FFF;
  margin: 0 19px;
  border-radius: 7px;

`;

export const ButtonLinkText = styled.Text`
   align-items: center;
   justify-content: center;
   font-size: 15px;
`;