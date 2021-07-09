import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
// import XUV300CarImg from "../../../assets/images/mahindra-xuv300-image.png";
import { url } from "inspector";
import { URL } from "url";
const TopCarsContainer = styled.div`
  ${tw` max-w-screen-lg w-full flex flex-col items-center justify-center pr-4 pl-4 md:pl-0 md:pr-0 mb-10`};
`;
const Title = styled.div`
  ${tw` text-black text-2xl md:text-5xl font-extrabold md:font-black md:leading-normal `};
`;
const CarsContainer = styled.div`
  ${tw` w-full flex flex-wrap justify-center mt-7 md:mt-10 `};
`;
const testCar: ICar = {
  name: "Hyundai Alcazar",
  mileage: "20.4 kmpl",
  thumbnailSrc:
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Alcazar/8459/1624013603874/front-left-side-47.jpg",
  dailyPrice: 2000,
  weeklyPrice: 12000,
  seatingCapacity: "6 Seater",
  gas: "Diesel",
};
const testCar1: ICar = {
  name: "Maruti Suzuki Baleno",
  mileage: "21.96 kmpl",
  thumbnailSrc:
    "https://imgd.aeplcdn.com/1056x594/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0&q=85",
  dailyPrice: 1800,
  weeklyPrice: 11500,
  seatingCapacity: "5 Seater",
  gas: "Petrol",
};
const testCar2: ICar = {
  name: "Mahindra XUV300",
  mileage: "20 kmpl",
  thumbnailSrc: require("../../../assets/images/mahindra-xuv300-image.png")
    .default,
  dailyPrice: 2200,
  weeklyPrice: 14000,
  seatingCapacity: "5 Seater",
  gas: "Petrol",
};
const testCar3: ICar = {
  name: "Royal Enfield Classic 350",
  mileage: "41.93 Kmpl",
  thumbnailSrc:
    require("../../../assets/images/royal-enfield-classic-350-dual-channel_600x400.webp")
      .default,
  dailyPrice: 1100,
  weeklyPrice: 7000,
  seatingCapacity: "1 Seater",
  gas: "Petrol",
};
const testCar4: ICar = {
  name: "Yamaha YZF R15 V3",
  mileage: "48.75 Kmpl",
  thumbnailSrc:
    require("../../../assets/images/yamaha-yzf-r15-v3-red_600x400.webp")
      .default,
  dailyPrice: 1300,
  weeklyPrice: 7200,
  seatingCapacity: "2 Seater",
  gas: "Petrol",
};
const testCar5: ICar = {
  name: "KTM 125 Duke",
  mileage: "46.92 Kmpl",
  thumbnailSrc: require("../../../assets/images/125-duke-2021_600x400.webp")
    .default,
  dailyPrice: 2200,
  weeklyPrice: 14000,
  seatingCapacity: "2 Seater",
  gas: "Petrol",
};
export function TopCar() {
  return (
    <TopCarsContainer>
      <Title>Deals of the Day</Title>
      <CarsContainer>
        <Car {...testCar} />
        <Car {...testCar1} />
        <Car {...testCar2} />
        <Car {...testCar3} />
        <Car {...testCar4} />
        <Car {...testCar5} />
      </CarsContainer>
    </TopCarsContainer>
  );
}