import { Client } from "https://deno.land/x/mysql/mod.ts";
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "d",
  poolSize: 3, // connection limit
  password: "abc123",
});
await client.execute(`CREATE DATABASE IF NOT EXISTS enok`);
await client.execute(`USE enok`);
await client.execute(`DROP TABLE IF EXISTS users`);
await client.execute(`
    CREATE TABLE users (
        id int(11) NOT NULL AUTO_INCREMENT,
        name varchar(100) NOT NULL,
        created_at timestamp not null default current_timestamp,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`);
let result = await client.execute(`INSERT INTO users(name) values(?)`, [
  "manyuanrong",
]);
console.log(result);
// { affectedRows: 1, lastInsertId: 1 }

let result = await client.execute(`update users set ?? = ?`, ["name", "MYR"]);
console.log(result);
// { affectedRows: 1, lastInsertId: 0 }

let result = await client.execute(`delete from users where ?? = ?`, ["id", 1]);
console.log(result);
// { affectedRows: 1, lastInsertId: 0 }

const username = "manyuanrong";
const users = await client.query(`select * from users`);
const queryWithParams = await client.query(
  "select ??,name from ?? where id = ?",
  ["id", "users", 1]
);
console.log(users, queryWithParams);

const users = await client.transaction(async (conn) => {
  await conn.execute(`insert into users(name) values(?)`, ["test"]);
  return await conn.query(`select ?? from ??`, ["name", "users"]);
});
console.log(users.length);

await client.close();
