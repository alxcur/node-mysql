var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  connection.query("SELECT * FROM products", function (err, results) {
    console.table(results)
  });
}

function postproduct() {
  inquirer
    .prompt([{
        name: "item",
        type: "input",
        message: "What is the ID of the product they would like to buy?"
      },
      {
        name: "units",
        type: "input",
        message: "How many units of the product they would like to buy?"
      }
    ]);
    postproduct.then(function (err) {
            if (err) throw err;
            console.log("Insufficient quantity.");
        });
      }