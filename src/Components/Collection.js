import React from "react";
import styled from "styled-components";

 const Collection = () => {
    const Container = styled.div`
    background-color: #777;
    height: 20px;
  `;
  return (
    <React.Fragment>
      <Container>
        <h1>I am a Collection</h1>
      </Container>
    </React.Fragment>
  )
}

export default Collection;

