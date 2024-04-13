import { useEffect, useState } from "react";
import { Filter, PeopleContainer } from "../components/index";
import { peopleService } from "../services/people.service";
import { PersonType } from "../types/types";

export const People = () => {
  const [people, setPeople] = useState<PersonType[]>([]);

  useEffect(() => {
    onInit();
  }, []);

  const onInit = async () => {
    setPeople(await peopleService.getPeople());
  };

  return (
    <div className="people-page">
      <Filter />
      <PeopleContainer people={people} />
    </div>
  );
};
