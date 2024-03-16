import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  // let like = 10
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    console.log("Like is updated", like)
  }, [like])
  // console.log("updated like", like);

  return (
    <div>
      <IconButton
        aria-label="likeBtn"
        color="primary"
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        aria-label="dislikeBtn"
        color="error"
        onClick={() => setDislike(dislike + 1)}
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button
        // camelCase
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}
      >
        👍 {like}
      </button>

      <button
        // camelCase
        onClick={() => setDislike(dislike + 1)}
      >
        👎 {dislike}
      </button> */}
    </div>
  );
}
