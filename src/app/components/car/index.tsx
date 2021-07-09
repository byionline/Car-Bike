import {
  faTachometerAlt,
  faEllipsisH,
  faFillDrip,
  faChair,
  faCarSide,
  faDolly,
  faDollyFlatbed,
  faCaretSquareLeft,
  faCarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Button } from "../button";
interface ICarProps extends ICar {}
const CarContainer = styled.div`
  width: 16.5em;
  min-height: 22.2em;
  max-height: 25.2em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw` flex flex-col items-center p-3 pb-4 bg-white rounded-md m-1 sm:m-3 md:m-6 `};
`;
const CarThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CarName = styled.h3`
  ${tw`text-base font-bold text-black mt-1 mb-1 `};
`;
const PriceContainer = styled.div`
  ${tw`w-full flex justify-center mt-3 `};
`;
const SmallText = styled.p`
  color: inherit;
  ${tw`text-xs font-thin inline-flex `};
`;
const DailyPrice = styled.h5`
  ${tw`text-red-500 font-bold text-sm mr-3 `};
`;
const WeeklyPrice = styled.h5`
  ${tw`text-gray-500 font-bold text-sm mr-3 `};
`;
const SmallIcon = styled.span`
  ${tw`text-gray-400 text-sm mr-1`};
`;
const DetailContainer = styled.div`
  ${tw`flex w-full justify-between`};
`;
const CarDetailContainer = styled.span`
  ${tw`flex items-center`};
`;
const CarInfo = styled.h6`
  ${tw`text-gray-400 text-xs `};
`;
const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`flex bg-gray-300 mt-2 mb-2 `};
`;
const RentButton = styled(Button)`
  // ${tw` min-w-full mt-5`};
`;
export function Car(props: ICarProps) {
  const {
    thumbnailSrc,
    name,
    mileage,
    seatingCapacity,
    dailyPrice,
    weeklyPrice,
    gas,
  } = props;
  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PriceContainer>
        <DailyPrice>
          ${dailyPrice}
          <SmallText>/Day</SmallText>
        </DailyPrice>
        <WeeklyPrice>
          ${weeklyPrice}
          <SmallText>/Week</SmallText>
        </WeeklyPrice>
      </PriceContainer>
      <Seperator />
      <DetailContainer>
        <CarDetailContainer>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetailContainer>
        <CarDetailContainer>
          <SmallIcon>
            <FontAwesomeIcon icon={faDolly} />
          </SmallIcon>
          <CarInfo>{seatingCapacity}</CarInfo>
        </CarDetailContainer>
        <CarDetailContainer>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetailContainer>
      </DetailContainer>
      <RentButton text="Book Now" />
    </CarContainer>
  );
}