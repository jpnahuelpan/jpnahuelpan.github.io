import { useState, useEffect } from 'react';

export interface Props {
    msg: string;
}
const Datetime = ({msg}: Props) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{msg}{currentDate.toLocaleString()}</p>
    </div>
  );
};

export default Datetime;
