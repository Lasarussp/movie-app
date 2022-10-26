import { useState } from 'react';

export function Counter() {
  // let like = 10;
  // const [state,setState] = useState(InitialValue);
  //camelCase = onclick => onClick
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => { setLike(like + 1); }}>👍 {like}</button>
      <button onClick={() => { setDisLike(disLike + 1); }}>👎 {disLike}</button>
    </div>
  );
}
;
