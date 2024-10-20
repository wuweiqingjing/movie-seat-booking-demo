// 'use client';
import { observer } from "mobx-react-lite";
// import seatStore from "../stores/SeatStores";
import Seat from "./Seat";

const SeatRow = observer(({ number }) => {

  return (
    <div className="flex gap-[8px] mb-[8px]">
      <Seat number={number} />
      <Seat number={number + 1} />
      <div className="w-[10px] h-[10px]"></div>
      <Seat number={number + 2} />
      <Seat number={number + 3} />
      <Seat number={number + 4} />
      <Seat number={number + 5} />
      <div className="w-[10px] h-[10px]"></div>
      <Seat number={number + 6} />
      <Seat number={number + 7} />
    </div>
  );
});

export default SeatRow;