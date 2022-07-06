import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #393e46;
  position: fixed;
  padding: ${mainStyle.padding};
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
    width: 60px;
    font-size: 15px;
    font-weight: 500;
    color: #eeeeee;
  }
`;

export const Header = () => {
  return (
    <SHeader>
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
          <Link to={"/Detail"}>
            <p>Detail</p>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/Interest"}>
            <p>Interest</p>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/Login"}>
            <p>Login</p>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/Search"}>
            <p>Search</p>
          </Link>
        </Menu>
      </MainWrap>
    </SHeader>
  );
};
