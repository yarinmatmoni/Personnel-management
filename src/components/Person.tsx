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
      <div className="number">{index + 1}</div>
      <div className="personal-data">
        <div className="full-name">{person.personalData.fullName}</div>
        <div className="phone-number">{person.personalData.phoneNumber}</div>
        <div className="address">{person.personalData.address}</div>
      </div>
      <div className="professional-data">
        <div className="division">מחלקה {person.professionalData.division}</div>
        <div className="class">{person.professionalData.class}</div>
        <div className="role">{person.professionalData.role}</div>
        <div className="courses">
          {person.professionalData.courses.map((course, index) => (
            <div key={`${course}_${index}`} className="course-name">
              {course}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
