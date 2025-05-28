import { readContacts } from '../utils/readContacts';
export const countContacts = async () => {
  const contacts = await readContacts();
  console.log(contacts.length);
  return contacts.length;
};

console.log(await countContacts());
