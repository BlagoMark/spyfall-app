import "./App.css";
import { Route, NavLink, Routes } from "react-router-dom";
import Start from "./components/Start/Start";
import Game from "./components/Game/Game";
import Rules from "./components/Rules/Rules";
import React from "react";

class App extends React.Component {
  state = {
    locations: [
      "Кухня",
      "Магазин",
      "Стадион",
      "Библиотека",
      "Барбершоп",
      "Музыкальный магазин",
      "Спортзал",
      "Банк",
      "База на Марсе",
      "Овощебаза",
      "Школа",
      "Наркокартель",
      "Помойка",
      "Коллцентр",
      "Бункер",
      "Багажник",
      "Шиномонтажка",
      "Метро",
      "Эйфелева башня",
      "Склад обуви",
      "Магазин парфюмерии",
      "Арендованая квартира",
      "Офис",
      "Ангар",
      "Кофейня",
      "Красти-краб",
      "Психбольница",
      "Планетарий",
      "Икея",
      "Зал с игровыми автоматами",
      "Бассейн",
      "Музей",
      "Студия звукозаписи",
      "Магазин игрушек",
      "Детский сад",
      "Баня",
      "Палатка",
      "Кабинет директора",
      "Отель",
      "Подводная лодка",
      "Казино",
      "Шпионская база",
      "Необитаемый остров",
      "Шахта",
      "Деревня",
      "Столовая",
      "Пещера",
      "Аэропорт",
      "Цирк",
      "Чердак",
      "Зоопарк",
      "Секонд-хенд",
      "Аптека",
      "Завод",
      "Велотрек",
      "Скейтпарк",
      "Кинотеатр",
      "Космодром",
      "Автозаправка",
      "Аквапарк",
      "Почта",
      "Яхта",
      "Полицейский участок",
      "Поезд",
      "Джунгли",
      "Пустыня",
      "Диснейленд",
      "Городская канализция",
      "Заброшенный дом",
      "Сцена",
      "Конюшня",
      "Эверест",
      "Кондитерская",
      "Театр",
      "Вулкан",
      "Пляж",
      "Стройплощадка",
      "Тюрьма",
      "Комната страха",
      "Салон красоты",
      "Барная стойка",
    ],
    players: 5,
    spies: 1,
  };

  randomLocation = () => {
    return this.state.locations[
      Math.floor(Math.random() * this.state.locations.length)
    ];
  };

  onInputChange = (event, operator, role) => {
    let value = event.currentTarget.value;
    if (value) {
      this.setState({ [role]: value });
    }
    if (operator && operator === "plus" && event.currentTarget !== "button") {
      let i = this.state[role];
      this.setState({ [role]: i + 1 });
      if (role === "spies") {
        if (i >= Math.floor(this.state.players / 3)) {
          this.setState({ spies: Math.floor(this.state.players / 3) });
        }
      }
    }
    if (operator && operator === "minus" && event.currentTarget !== "button") {
      let i = this.state[role];
      this.setState({ [role]: i - 1 });
      if (role === "players") {
        if (i <= 5) {
          this.setState({ players: 5 });
        }
      }
      if (role === "spies") {
        if (i <= 1) {
          this.setState({ spies: 1 });
        }
      }
    }
  };

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <div className="Menu">
              <h1 className="Title">SpyFall</h1>
              <NavLink className="StartButton" to={"/start"}>
                Play
              </NavLink>
            </div>
          }
        ></Route>
        <Route
          path="/start"
          element={
            <Start
              onPlayersChange={this.onPlayersChange}
              onSpiesChange={this.onSpiesChange}
              onInputChange={this.onInputChange}
              players={this.state.players}
              spies={this.state.spies}
            />
          }
        ></Route>
        <Route
          path="/game"
          element={
            <Game
              players={this.state.players}
              spies={this.state.spies}
              randomLocation={this.randomLocation}
            />
          }
        ></Route>
        <Route path="/rules" element={<Rules />}></Route>
      </Routes>
    );
  }
}

export default App;
