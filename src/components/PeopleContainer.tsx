import { Person } from "./index";
import { PersonType } from "../types/types";

export const PeopleContainer = ({ people }: { people: PersonType[] }) => {
  return (
    <div>
      {people.map((person) => (
        <Person key={person.id} />
      ))}
    </div>
  );
};
