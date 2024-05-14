export type PersonType = {
  id: string;
  personalData: {
    fullName: string;
    address: string;
    phoneNumber: string;
  };
  professionalData: {
    role: string;
    division: string;
    class?: string;
    courses?: string[];
  };
};

export type CreatePersonOptionsType = {
  name: string;
  label: string;
  unselectedOption: string;
  options: string[];
};
