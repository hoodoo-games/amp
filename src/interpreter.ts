import { Program } from "./program";

// runtime representation and state of program
export class Interpreter {
  program: Program;

  constructor(program: Program) {
    this.program = program;
  }

  run() {}
}
