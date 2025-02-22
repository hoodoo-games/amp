import { AmpProgram } from "./program";

// runtime representation and state of program
export class AmpInterpreter {
  program: AmpProgram;

  constructor(program: AmpProgram) {
    this.program = program;
  }

  run() {}
}
