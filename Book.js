   import client from "./db.js";
   export const BookSel = async() => {
   console.info("@@Query id: ", id)
   console.log(`SELECT name, author, price FROM books WHERE id = ${id} ORDER BY id 
    LIMIT 10`);
   return await client.execute(`SELECT name, author, price FROM books WHERE id = ${    id} ORDER BY id LIMIT 10`);                                                     
   }
