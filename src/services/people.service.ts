import { utilService } from "./util.service";
import { storageService } from "./storage-service.service";
import { PersonType } from "../types/types";

const STORAGE_KEY = "people";

const getPeople = async () => {
  const people: PersonType[] = await storageService.query(STORAGE_KEY);
  return people;
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
      fullName: `Full Name ${index}`,
      address: `Address ${index}`,
      phoneNumber: `Phone Number ${index}`,
    },
    professionalData: {
      role: `Role ${index}`,
      division: _randomDivision(),
      class: `Class ${index}`,
      courses: [],
    },
  };
};

_crateDemoData();

export const peopleService = { getPeople };
