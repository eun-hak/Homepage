import React from "react";
import Youtube from "../../components/Youtube";
import Navbar from "../../components/Navbar";
import * as Styled from "./styled";

function Mainpage() {
  return (
    <>
      <Navbar></Navbar>
      <Styled.WordBox>
        누구나 쉽게 할 수 있는 마케팅
        <br />
        3일만에 상담부터 콘텐츠 제작까지
        <br />
        하루에 60초로 인플루언서 마케팅을!
        <br />
        59살 아빠도 할 수 있도록 쉽게!
      </Styled.WordBox>

      <Youtube videoId={"scMqjJWixpw"}></Youtube>
    </>
  );
}

export default Mainpage;
