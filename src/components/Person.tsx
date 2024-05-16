import { PersonType } from "../types/types";

export const Person = ({
  person,
  index,
}: {
  person: PersonType;
  index: number;
}) => {
  return (
    <div className="person">
      <div className="number">{index + 1}.</div>
      <div className="person-details">
        <div className="personal-data">
          <div className="full-name">
            <span className="field-name">שם:</span>
            {person.fullName}
          </div>
          <div className="phone-number">
            <span className="field-name">טלפון:</span>
            {person.phoneNumber}
          </div>
        </div>
        <div className="professional-data">
          <div className="division">
            <span className="field-name">מחלקה:</span>
            {person.division}
          </div>
          <div className="class">
            <span className="field-name">כיתה:</span>
            {person.class}
          </div>
          <div className="role">
            <span className="field-name">תפקיד:</span>
            {person.role}
          </div>
        </div>
      </div>
      <button>לפרטים</button>
    </div>
  );
};
