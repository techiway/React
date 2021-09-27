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
  // <Box img={img}>
  //   {inStore ? <Header> In-Store </Header> : null}
  //   {/* {discount ? <Discount>${discountVal}</Discount> : null} */}
  //   <Title>
  //     {" "}
  //     <p className="m-l">Price: ${price}</p> <p className="m-r">Size: {size}</p>
  //   </Title>
  // </Box>
  <Box2>
    <Layer1 src={img} alt='pics'/>
    <Layer2>
    <p>Mens Pant</p>
    <p>Available Size :</p>
    <SizeBoxContainer>
  <SizeBox>
    <p style={{marginTop:'10px'}}>S</p>
  </SizeBox>
  <SizeBox>
    <p style={{marginTop:'10px'}}>S</p>
  </SizeBox>
  <SizeBox>
    <p style={{marginTop:'10px'}}>S</p>
  </SizeBox>
  <SizeBox>
    <p style={{marginTop:'10px'}}>S</p>
  </SizeBox>
    </SizeBoxContainer>
    <p>Price -₹ 122</p>
    </Layer2>
  </Box2>
);

const Box2 = styled.div`
  height: 350px;
  width: 450px;
  margin: 20px;
  position: relative;
  border-radius: 14px;
  display: flex;
  flex-direction:column;
  `;
const Layer1 = styled.img`
  height:100%;
  width:250px;
  border-radius:6px 0 0 6px;
`
const Layer2 = styled.div`
 height:100%;
  width:200px;
  border: 1px solid black;
  background-color: #ccc;
  border-radius:0 6px 6px 0;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`
const SizeBoxContainer = styled.div`
height:100px;
 width:90%;
  /* display:flex;
 justify-content:space-between; */
`

const SizeBox = styled.div`
height:40px;
 width:40px;
 border:1px solid black;
 border-radius:50%;
 display:flex;
 float:left;
`



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