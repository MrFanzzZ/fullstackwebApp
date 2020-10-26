   import client from "./db.js";
class Book{
findAll(){
return client.execute("SELECT * FROM book");
}
create ({title}){
return client.execute(`INSERT INTO book(title) values (${"呐喊"})`);
}
}
const bookModel = new Book();

export const BookAll = async () =>{
return await bookModel.findAll();
}
export  const BookSel = async() => {
   console.info("@@Query id: ", id)
   console.log("SELECT * from book");
   return await client.execute(`SELECT  * from book`);                                                     
   }
