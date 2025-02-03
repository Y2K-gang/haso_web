import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  background: white;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 100px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchSection = styled.div`
  flex: 1;
  max-width: 36rem;
  margin: 0 2rem;
`;

export const SearchContainer = styled.div`
  position: relative;
  height: 60px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  border: 1px solid #d1d5db;
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const DropdownButton = styled.select`
  border: none;
  background: none;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
`;

export const ButtonGroup = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 1rem;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  color: #374151;
  &:hover {
    color: #111827;
  }
`;
