import { utilService } from "./util.service";
import { storageService } from "./storage-service.service";
import { PersonType } from "../types/types";

const STORAGE_KEY = "people";

const getPeople = async () => {
  const people: PersonType[] = await storageService.query(STORAGE_KEY);
  return people;
};

const getInputs = () => {
  return [
    {
      name: 'fullName',
      type: 'text'
    },{
      name: 'personalNumber',
      type: 'text'
    },{
      name: 'phoneNumber',
      type: 'tel'
    },{
      name: 'address',
      type: 'text'
    }
  ];
}

const getSelects = () => {
  return [
    {
      name: "role",
      unselectedOption: "בחר תפקיד",
      options: ['מ"פ', 'סמ"פ', 'מ"מ', "סמל", 'מ"כ' , 'לוחם'],
    },
    {
      name: "division",
      unselectedOption: "בחר מחלקה",
      options: ["סגל", "מחלקה 1", "מחלקה 2", "מחלקה 3"],
    },
    {
      name: "class",
      unselectedOption: "בחר כיתה",
      options: ["כיתה א", "כיתה ב", "כיתה ג"],
    },
  ];
}

const getDefaultForm = () => {
  return { fullName: "", phoneNumber: "", address: "", role: "", division: "", name: ""};
};

const getKeyLabel = (key: string) => {
  switch(key){
    case 'fullName': 
      return 'שם מלא';
    case 'phoneNumber':
      return 'מספר טלפון'
    case 'address':
      return 'כתובת'
    case 'personalNumber':
      return 'מספר אישי';
    case 'role':
      return 'תפקיד';
    case 'division':
      return 'מחלקה';
    case 'class':
      return 'כיתה';
    default:
      return;
  }
}

const addNewPerson = async (personToSave: PersonType) => {
  const newPerson = await storageService.post(STORAGE_KEY,personToSave);
  return newPerson;
}

const getPerson = async (personId:string) => {
  const person = await storageService.get(STORAGE_KEY,personId);
  return person;
}

const removePerson = async (personId: string) => {
  await storageService.remove(STORAGE_KEY,personId);
}

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

const _randomDivision = (totalDivisions: number = 3): string => {
  return (Math.floor(Math.random() * totalDivisions) + 1).toString();
};

const _cratePerson = (index: number): PersonType => {
  return {
    _id: utilService.makeId(),
    personalNumber: `${index}`,
    fullName: `${index}שם מלא`,
    address: `${index}כתובת מגורים 81`,
    phoneNumber: `${index}0528024320`,
    role: `${index}מפקד`,
    division: _randomDivision(),
    class: `${index}`,
    courses: [],
  };
};

_crateDemoData();

export const peopleService = {
  getPeople,
  getInputs,
  getSelects,
  getDefaultForm,
  getKeyLabel,
  addNewPerson,
  getPerson,
  removePerson
};
