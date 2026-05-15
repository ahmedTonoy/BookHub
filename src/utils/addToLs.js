import toast from "react-hot-toast";

export const getLsData = (listName) => {
  const dataStr = localStorage.getItem(listName);
  if(dataStr) {
    const dataParsed = JSON.parse(dataStr);
    return dataParsed;
  } else {
    return [];
  }
};

export const setLsData = (bookId, bookName, listName) => {
  const existingData = getLsData(listName);
  if(existingData.includes(bookId)) {
    toast.error(`${bookName} already exists in ${listName} list`, {
      icon: '⚠',
      position: "top-right",
      removeDelay: 1500,
    });
  } else {
    existingData.push(bookId);
    const newDataStr = JSON.stringify(existingData);
    localStorage.setItem(listName, newDataStr);
    toast.success(`${bookName} added to ${listName} list`, {
      position: "top-right",
      removeDelay: 2000,
    });
  }
};