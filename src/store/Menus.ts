import { makeAutoObservable } from "mobx";

class MenusStore {
  constructor() { makeAutoObservable(this); }
}



export default MenusStore;