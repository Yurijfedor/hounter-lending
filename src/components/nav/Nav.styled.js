import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
  z-index: 2;
`;

export const NavLink = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 32px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.6;
  text-transform: capitalize;
  text-decoration: none;

  color: #f0f3fd;
  cursor: pointer;

  &:hover {
    background-color: #10b981;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.5rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  min-width: 120px;
  display: none;
  ${NavLink}:hover & {
    display: block;
  }
`;

export const DropdownLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #888b97;
  text-decoration: none;
  &:hover {
    background-color: #d1fae5;
    color: #10b981;
  }
`;
