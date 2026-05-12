interface AddressType {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: {
    lat: string;
    long: string;
  };
}

interface CompanyType {
  bs: string;
  catchPhrase: string;
  name?: string;
}

interface UserType {
  address: AddressType;
  email: string;
  id: number;
  name?: string;
  phone: string;
  username: string;
  website: string;
  company: CompanyType;
}

export async function getUsers() {
    const USER_URL: string = "https://jsonplaceholder.typicode.com/users";

  try {
    const resp = await fetch(USER_URL);
    if (!resp.ok) throw new Error("Data fetch failed");
    const allUsers: UserType[] = await resp.json();
    return allUsers;
  } catch (error) {
    console.log("error", error);
    throw new Error(error.message)
  }
}
