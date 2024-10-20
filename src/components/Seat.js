'use client';
import { observer } from "mobx-react-lite";
import seatStore from "../stores/SeatStores";

const Seat = observer(({ number }) => {

  const handleClick = () => {
    if(seatStore.isOccupied(number)) return;
    if(seatStore.isSelected(number)) {
      seatStore.deselectSeat(number);
    }else {
      seatStore.selectSeat(number);
    }
  };

  return (
    <div>
      <div
        className={`w-[20px] text-center h-[16px] bg-[#44444e] cursor-pointer 
        ${seatStore.isSelected(number) ? "bg-[#6fe9f6]" : ""} 
        ${seatStore.isOccupied(number) ? "bg-[#ffffff]" : ""} rounded-t-[50%]`}
        onClick={handleClick}
      >
      </div>
    </div>
  );
});

export default Seat;