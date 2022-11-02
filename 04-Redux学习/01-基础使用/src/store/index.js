const redux = require("redux");
const reducer = require("./reducer");

// import redux from "redux";
// import reducer from "./reducer";

// 3. 根据 reducer 创建一个 store 对象
const store = redux.createStore(reducer);

module.exports = {
  store,
};
// export default store;
