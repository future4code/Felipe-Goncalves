import React, { useState } from "react";
import styled from "styled-components";

import GetMatch from "./components/components/GetMatch";
import MatchCard from "./components/components/MatchCard";

const ContainerApp = styled.div`
  text-align: center;
`;

export default function App() {
  const [enjoying, setEnjoying] = useState(false);

  const likes = () => {
    setEnjoying(true);
  };

  return (
    <ContainerApp>
      {enjoying === true ? (
        <GetMatch start={likes} setEnjoying={setEnjoying} />
      ) : (
        <MatchCard enjoying={likes} />
      )}
    </ContainerApp>
  );
}
