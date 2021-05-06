import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 2rem;
  margin: 20px;
  margin-left: 0px;
  font-weight: bold;
  color: #16c784;
`;

type valueTextProps = {
  value: number;
};

export const ValueText: FC<valueTextProps> = ({ value }) => {
    const [v,setV] = useState(0);
    useEffect(function() {
        let randomBRrr = Math.random()* 420;
        let brr = 1;
        setTimeout(() => {
            if(v<value) {
                setV(v+2^brr);
            }
            brr = brr + 4.4;
        }, randomBRrr);
    }, [v]);
  return <Text>{v}%</Text>;
};
