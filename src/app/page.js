'use client';
import { observer } from "mobx-react-lite";
import MovieSelector from "@/components/MovieSelector";
import UserSwitcher from "@/components/UserSwitcher";
import seatStore from "../stores/SeatStores";
import './globals.css';
import SeatRow from "@/components/SeatRow";

const Home = observer(() => {

  return (
    <div className="container mx-auto p-4 bg-[#242333] flex items-center flex-col">
      <MovieSelector />
      <UserSwitcher />
      <div className="screen h-[50px] w-[170px] trapezoid bg-white fluorescence mb-[20px]">Screen</div>
      <div className="flex flex-col">
        <SeatRow number={1}></SeatRow>
        <SeatRow number={9}></SeatRow>
        <SeatRow number={17}></SeatRow>
        <SeatRow number={25}></SeatRow>
        <SeatRow number={33}></SeatRow>
        <SeatRow number={41}></SeatRow>
      </div>

      <div className="info">
        <p>{seatStore.currentUserName()}  Selected Seats: {seatStore.selectedSeats().join(", ")}</p>
        <p>Total Price: ${seatStore.totalPrice}</p>
      </div>
    </div>
  );
});

export default Home;