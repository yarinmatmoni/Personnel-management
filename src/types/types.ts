export type PersonType = {
  id: string;
  personalData: {
    fullName: string;
    address: string;
    phoneNumber: string;
  };
  professionalData: {
    role: string;
    division: number;
    class: string;
    courses: string[];
  };
};

export type CreatePersonOptionsType = {
  id: string;
  label: string;
  unselectedOption: string;
  options: string[];
};
