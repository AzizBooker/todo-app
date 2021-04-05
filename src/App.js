import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import { Container, Flex, Center, Box } from "@chakra-ui/react";

const Wrapper = styled.section`
  display: flex;
`;
const Div1 = styled.div`
flex:1;
max-width:200px;
height:100vh;
background-color: #333;
`;
const Div2 = styled.div`
  flex: 5;
  background-color: red;
`;

function App() {
  return (
    <div>
      <Wrapper>
        <Div1>
        <Sidebar />
        </Div1>

      <Div2>
        <h1>Hello</h1>
      </Div2>
      </Wrapper>
    </div>
  );
}

export default App;
