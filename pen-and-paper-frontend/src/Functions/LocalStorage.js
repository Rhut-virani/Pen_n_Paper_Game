const getFromStorage = (title) =>{
  return localStorage.getItem(title);
}

const saveToStorage = (title, data) =>{
  localStorage.setItem(title, data);
}

const removeFromStorage = (title) =>{
  localStorage.removeItem(title);
}

const clearStorage = () =>{
  localStorage.clear();
} 
export {getFromStorage, saveToStorage, removeFromStorage, clearStorage};