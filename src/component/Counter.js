import { useState } from "react";

export function Counter() {
  // let like = 10
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  console.log("updated like", like);

  return (
    <div>
      <button
        // camelCase
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}>👍 {like}</button>

      <button
        // camelCase
        onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}
