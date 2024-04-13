const makeId = (length = 5): string => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const saveToLocalStorage = <T>(entityType: string, entities: T[]) => {
  localStorage.setItem(entityType, JSON.stringify(entities));
};

export const utilService = { makeId, saveToLocalStorage };
