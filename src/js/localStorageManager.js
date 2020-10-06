class LocalStorageManager {
  constructor() {
    this.id = 0;
    this.shoppingLists = [];
  }

  static addShoppingList(shoppingList) {
    const localStorageManager =
      JSON.parse(localStorage.getItem("shoppingLists"));
    const shoppingLists = new Array(localStorageManager.shoppingLists);
    
    localStorageManager.shoppingLists = [...shoppingLists, shoppingList];

    localStorage.setItem("shoppingLists", JSON.stringify(localStorageManager));
  }

  static getShoppingLists() {
    const localStorageManager =
      JSON.parse(localStorage.getItem("shoppingLists"));
    const shoppingLists = new Array(localStorageManager.shoppingLists);

    return shoppingLists;
  }
}

export default LocalStorageManager;
