// const validator = require("validator");
const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

//Customize yargs
yargs.version("1.1.0");
//add, remove, read, list notes (these are 4 commands we want to customize in our notes app)

//Create add command
yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Notes body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title ",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNote();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse(); //goes through the process of parsing the arguments
