export type PersonType = {
  _id?: string;
  personalNumber?: string,
  fullName?: string;
  address?: string;
  phoneNumber?: string;
  role?: string;
  division?: string;
  class?: string;
  courses?: string[];
};

export type CreatePersonOptionsType = {
  name: string;
  label: string;
  unselectedOption: string;
  options: string[];
};
