import { Person } from "./index";
import { PersonType } from "../types/types";

export const PeopleContainer = ({ people }: { people: PersonType[] }) => {
  return (
    <ul className="people-container">
      {people.map((person, index) => (
        <li key={person._id}>
          <Person person={person} index={index} />
        </li>
      ))}
    </ul>
  );
};
