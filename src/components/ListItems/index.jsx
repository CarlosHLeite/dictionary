import styled from "styled-components";

const ListItems = ({ element }) => {
  return (
    <List>
      {element.definitions[0] && <li>{element.definitions[0]?.definition}</li>}
      {element.definitions[1] && <li>{element.definitions[1]?.definition}</li>}
      {element.definitions[2] && <li>{element.definitions[2]?.definition}</li>}
    </List>
  );
};
export default ListItems;

const List = styled.ul`
  margin: 10px 0 40px 0;
  padding: 0 0 0 40px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  list-style: none;

  li::before {
    content: "•";
    color: #8f19e8;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;
