import React from "react";
import styled from "styled-components";

export const Card = ({ img, inStore, discountVal ,discount }) => (
  <Box img={img}>
    {inStore ? <Header> In-Store </Header> : null}
    {discount ? <Discount>${discountVal}</Discount> : null}
    <Title>
      {" "}
      <p className="m-l">The Iconic</p> <p className="m-r">ICON</p>
    </Title>
  </Box>
);

export const Card1 = ({ img, inStore, price ,size }) => (
  <Box img={img}>
    {inStore ? <Header> In-Store </Header> : null}
    {/* {discount ? <Discount>${discountVal}</Discount> : null} */}
    <Title>
      {" "}
      <p className="m-l">Price: ${price}</p> <p className="m-r">Size: {size}</p>
    </Title>
  </Box>
);

const Box = styled.div`
  height: 250px;
  width: 250px;
  margin: 20px;
  position: relative;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid black;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-color: #ccc;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  position: absolute;
  height: 50px;
  width: 90%;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-content: space-around;
  border: 1px solid black;
  bottom: 20px;
  background:#fff;
  color:#000;
`;

const Header = styled.div`
  position: absolute;
  height: 30px;
  width: 30%;
  display: flex;
  border: 1px solid black;
  left: 10px;
  top: 20px;
  border-radius: 14px;
  justify-content: center;
  align-content: center;
`;

const Discount = styled.div`
  position: absolute;
  height: 30px;
  width: 30%;
  display: flex;
  border: 1px solid black;
  left: 10px;
  top: 60px;
  border-radius: 14px;
  justify-content: center;
  align-content: center;
`;