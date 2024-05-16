import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Filter, PeopleContainer } from "../components/index";
import { peopleService } from "../services/people.service";
import { PersonType } from "../types/types";
import addIcon from "../assets/add.svg";

export const People = () => {
  const [people, setPeople] = useState<PersonType[]>([]);

  useEffect(() => {
    onInit();
  }, []);

  const onInit = async () => {
    setPeople(await peopleService.getPeople());
  };

  const addPerson = (personToSave: PersonType) => {
    console.log(personToSave);
  };

  return (
    <div className="people-page">
      <Filter />
      <PeopleContainer people={people} />
      <NavLink to={"/people/create"} className="new-person">
        <img src={addIcon} alt="add icon" />
      </NavLink>
      <Outlet context={{ addPerson }} />
    </div>
  );
};
