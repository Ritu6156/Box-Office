import React from 'react'
import { DetailsWrapper } from './Detail.styled';


function  Detail ({ status, premiered, network }) {
    return (
      <DetailsWrapper>
        <p>
          Status: <span>{status}</span>
        </p>
        <p>
          Premiered {premiered} {network ? `on ${network.name}` : null}
        </p>
      </DetailsWrapper>
    );
  };

export default Detail
