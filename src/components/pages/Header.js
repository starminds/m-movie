import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBrain,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #393e46;
  position: fixed;
  padding: ${mainStyle.padding};
  z-index: 9;
`;

const Logo = styled.div`
  width: 220px;
  p {
    font-size: 30px;
    font-weight: 900;
    color: #eeeeee;
  }
`;

const MainWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  margin-left: 30px;
  p {
    width: 70px;
    font-size: 15px;
    font-weight: 500;
    color: #eeeeee;
  }
`;

export const Header = () => {
  const [bg, setBg] = useState("transparent");

  const handleScroll = () => {
    const sct = window.pageYOffset;
    if (sct > 500) {
      setBg("#1d1d1d");
    } else {
      setBg("transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <SHeader bgcolor={bg}>
      <Logo>
        <Link to={"/"}>
          <p>M-movie</p>
        </Link>
      </Logo>

      <MainWrap>
        <Menu>
          <Link to={"/"}>
            <p>
              <FontAwesomeIcon icon={faHouse} />
              Home
            </p>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/Interest"}>
            <p>
              <FontAwesomeIcon icon={faBrain} />
              Interest
            </p>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/Login"}>
            <p>
              <FontAwesomeIcon icon={faBed} />
              Login
            </p>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/Search"}>
            <p>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Search
            </p>
          </Link>
        </Menu>
      </MainWrap>
    </SHeader>
  );
};
