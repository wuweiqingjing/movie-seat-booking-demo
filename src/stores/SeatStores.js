
import { makeAutoObservable, action } from "mobx";
import { makePersistable, isHydrated } from "mobx-persist-store"; // 持久化


class SeatStore {
  'use client';
  users = [
    {
      name: "Jack", balance: 100, occupiedMovie: [
        {
          id: 1,
          seatList: []
        },
        {
          id: 2,
          seatList: []
        },
        {
          id: 3,
          seatList: []
        },
      ]
    },
    {
      name: "Lucia", balance: 150, occupiedMovie: [
        {
          id: 1,
          seatList: []
        },
        {
          id: 2,
          seatList: []
        },
        {
          id: 3,
          seatList: []
        },
      ]
    },
    {
      name: "Tom", balance: 200, occupiedMovie: [
        {
          id: 1,
          seatList: []
        },
        {
          id: 2,
          seatList: []
        },
        {
          id: 3,
          seatList: []
        },
      ]
    },
  ];
  currentUser = 0; // 索引
  currentMovieId = 1; // 当前电影ID
  movieList = [
    {
      id: 1,
      name: "Avengers: Endgame",
      price: 10,
    },
    {
      id: 2,
      name: "Joker",
      price: 12,
    },
    {
      id: 3,
      name: "Toy Story 4",
      price: 8,
    },
  ];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {  // 在构造函数内使用 makePersistable
      name: 'SeatStore', // 保存的name，用于在storage中的名称标识，只要不和storage中其他名称重复就可以
      properties: ["users", "currentMovieId", "currentUser"],
      storage: window.localStorage,
    }).then(
      action((persistStore) => {
        console.log(persistStore);
      }))
  }

  selectSeat(seat) {
    const movie = this.users[this.currentUser].occupiedMovie.find(item => item.id == this.currentMovieId);
    movie.seatList.push(seat);
  }

  deselectSeat(seat) {
    const movie = this.users[this.currentUser].occupiedMovie.find(item => item.id == this.currentMovieId);
    movie.seatList = movie.seatList.filter(s => s !== seat)
  }

  switchUser(index) {
    this.currentUser = index;
  }

  switchMovie(id) {
    this.currentMovieId = id;
  }

  currentUserName() {
    return this.users[this.currentUser].name;
  }

  isSelected(number) {
    const movie = this.users[this.currentUser].occupiedMovie.find(item => item.id == this.currentMovieId);

    return movie.seatList.includes(number)
  }
  isOccupied(number) {
    let flag = false;
    this.users.forEach((item, index) => {
      if (index != this.currentUser) {
        const movie = item.occupiedMovie.find(item => item.id == this.currentMovieId); // 当前电影
        if (movie && movie.seatList.includes(number)) {
          flag = true;
        }
      }
    })
    return flag;
  }
  isCurrentUser(uid) {
    return this.currentUser == uid;
  }

  selectedSeats() {
    return this.currentUserMovie.seatList;
  }

  get totalPrice() {
    // 价格中间八个座位价格为1.5倍
    let price = 0;
    const movie = this.currentUserMovie;
    const selectMovie = this.movieList.find(m => m.id == this.currentMovieId);
    movie.seatList.forEach(s => {
      if (s >= 19 && s <= 22 || s >= 27 && s <= 30) {
        // 1.5倍价格
        price += selectMovie.price * 1.5;
      } else {
        price += selectMovie.price;
      }
    })
    return price;
  }
  get currentUserMovie() {
    return this.users[this.currentUser].occupiedMovie.find(item => item.id == this.currentMovieId);
  }
}

const seatStore = new SeatStore();
export default seatStore;