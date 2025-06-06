import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contact = createFakeContact();
  const contacts = await readContacts();
  contacts.push(contact);
  await writeContacts(contacts);
};

addOneContact();
