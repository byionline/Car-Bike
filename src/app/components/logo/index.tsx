import styled from "styled-components";
import tw from "twin.macro";
import LogoImg from "../../../assets/images/logo.jpeg";
const LogoContainer = styled.div`
  ${tw` flex items-center m-2`}
`;
const LogoText = styled.div`
  ${tw` text-xl md:text-2xl font-bold text-black m-1 `}
`;
const Image = styled.div`
  ${tw` h-6 md:h-9 `} img {
    width: auto;
    height: 100%;
  }
`;
export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={LogoImg} alt="Logo" />
      </Image>
      <LogoText>Car &amp; Bike</LogoText>
    </LogoContainer>
  );
}