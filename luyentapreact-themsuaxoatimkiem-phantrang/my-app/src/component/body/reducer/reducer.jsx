import React, {useEffect, useState} from 'react';

const Reducer = () =>  {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)

  useEffect(() => {
  const a = document.title = 'Count is: ' + count
    console.log("1")
  },[handleClick])

  return <div>
    <p>Để title trang web để nhận thấy thay đổi</p>
    <button onClick={handleClick}>Increment Count</button>
  </div>
};
export default Reducer;