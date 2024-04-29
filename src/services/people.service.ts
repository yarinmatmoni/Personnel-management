import { utilService } from "./util.service";
import { storageService } from "./storage-service.service";
import { PersonType, CreatePersonOptionsType } from "../types/types";

const STORAGE_KEY = "people";

const getPeople = async () => {
  const people: PersonType[] = await storageService.query(STORAGE_KEY);
  return people;
};

const getCreatePersonOptions: () => CreatePersonOptionsType[] = () => {
  return [
    {
      id: "role",
      label: "תפקיד",
      unselectedOption: "בחר תפקיד",
      options: ['מ"פ', 'סמ"פ', 'מ"מ', "סמל", 'מ"כ'],
    },
    {
      id: "division",
      label: "מחלקה",
      unselectedOption: "בחר מחלקה",
      options: ["סגל", "מחלקה 1", "מחלקה 2", "מחלקה 3"],
    },
    {
      id: "class",
      label: "כיתה",
      unselectedOption: "בחר כיתה",
      options: ["כיתה א", "כיתה ב", "כיתה ג"],
    },
  ];
};

//Private functions
const _crateDemoData = () => {
  const people = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || [];

  if (people.length > 0) return;
  for (let i = 0; i < 10; i++) {
    const newPerson = _cratePerson(i);
    people.push(newPerson);
  }

  utilService.saveToLocalStorage(STORAGE_KEY, people);
};

const _randomDivision = (totalDivisions: number = 3): number => {
  return Math.floor(Math.random() * totalDivisions) + 1;
};

const _cratePerson = (index: number): PersonType => {
  return {
    id: utilService.makeId(),
    personalData: {
      fullName: `${index}שם מלא`,
      address: `${index}כתובת מגורים 81`,
      phoneNumber: `${index}0528024320`,
    },
    professionalData: {
      role: `${index}מפקד`,
      division: _randomDivision(),
      class: `${index}`,
      courses: [],
    },
  };
};

_crateDemoData();

export const peopleService = {
  getPeople,
  getCreatePersonOptions,
};
