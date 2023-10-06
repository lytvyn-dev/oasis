import { HiOutlineMoon, HiOutlineUser, HiArrowRightOnRectangle } from "react-icons/hi2";

import { Link } from "react-router-dom";
HiOutlineMoon;

import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: solid 1px var(--color-grey-100);
  padding: 1.2rem 4.8rem;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: end;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  & li {
    cursor: pointer;
  }

  & li svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

const Header = function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <Ul>
        <li>
          <Link to="/update-account">
            <HiOutlineUser />
          </Link>
        </li>
        <li>
          <HiOutlineMoon onClick={() => 123} />
        </li>
        <li>
          <Link to="/login">
            <HiArrowRightOnRectangle />
          </Link>
        </li>
      </Ul>
    </StyledHeader>
  );
};

export default Header;
