  1 import client from "./db.js";
  2 export const BookSel = async() => {
  3 console.info("@@Query id: ", id)
  4 console.log(`SELECT name, author, price FROM books WHERE id = ${id} ORDER BY id 
    LIMIT 10`);
  5 return await client.execute(`SELECT name, author, price FROM books WHERE id = ${    id} ORDER BY id LIMIT 10`);                                                     
  6 }
