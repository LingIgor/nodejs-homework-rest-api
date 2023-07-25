// import fs from 'fs/promises'
// import path from 'path';

// export const contactsPath = path.resolve("models", "contacts.json");

// const newContacts = (contacts) =>
//   fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(data);
// }

// const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   const oneContact = contacts.find((item) => item.id === contactId);
//   return oneContact || null;
// }

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === contactId);
//   if (index === -1) {
//     return null;
//   }
//   const [oneContact] = contacts.splice(index, 1);
//   await newContacts(contacts);
//   return oneContact;
// }

// const addContact = async (body) => {
//   const contacts = await listContacts();
//   const newContact = {
//     id: nanoid(),
//    ...body,
//   };
//   contacts.push(newContact);
//   await newContacts(contacts);
//   return newContact;
// }

// const updateContact = async (contactId, body) => {
//   const list = await readFileContacts()
//   const contactIndex = list.findIndex(({ id }) => id === contactId)

//   if (contactIndex === -1) return null;

//   const updatedContactData = { contactId, ...body}

//   list[contactIndex] = updatedContactData;

//   await writeFileContacts(list)

//   return list[contactIndex]
// }

// export default  {
//   listContacts,
//   // getContactById,
//   // removeContact,
//   // addContact,
//   // updateContact,
// }
