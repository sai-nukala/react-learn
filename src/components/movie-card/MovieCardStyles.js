import styled from 'styled-components';
const MoreOptions = styled.div`
  background-color: 'violet';
  width: 335px;
  height: 36px;
  border-radius: 50%;
  text-align: end;
  line-height: 36px;
  position: absolute;
`;

const ContextMenu = styled.div`
  position: absolute;
  right: 0px;
  background-color: darkgrey;
  width: 190px;
  padding: 0 0 14px;
  border-radius: 4px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  z-index: 2;
`;

const MenuButton = styled.div`
  margin: 8px 10px 8px auto;
  cursor: pointer;
`;
const MenuRow = styled.div`
  box-sizing: border-box;
  padding: 8px 23px;
  flex: 1;
  width: 100%;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
export { MenuRow, MenuButton, ContextMenu, MoreOptions };
