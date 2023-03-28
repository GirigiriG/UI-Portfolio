import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import styled from "styled-components";

styled.button`
    color: ews
`

interface Props {
   onClick: () => void;
}

const Like = ({ onClick }: Props) => {
   const [isLiked, setIsLike] = useState(false);
   return (
      <AiFillHeart
         size={40}
         color={isLiked ? "red" : "black"}
         onClick={() => {
            setIsLike(!isLiked);
            onClick();
         }}
      ></AiFillHeart>
   );
};

export default Like;
