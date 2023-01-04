import React from "react";
import * as Styled from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Styled.Nav>
        <Styled.NavLink>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 500만 자영업자를 위한
          인플루언서 마케팅 플랫폼, 오블
        </Styled.NavLink>
        <Styled.NavLink>60초 초간편 설문상담</Styled.NavLink>
      </Styled.Nav>
      {/* <Styled.Bars></Styled.Bars> */}
    </>
  );
}

export default Navbar;
