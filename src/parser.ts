import { CompilationOptions } from "./compiler";
import { Program, ProgramBuilder } from "./program";
import { Token } from "./tokenizer";

export function parse(tokens: Token[], options: CompilationOptions): Program {
  const prog = new ProgramBuilder(options.programName);

  //TODO parse token stream into elements

  return prog.build();
}
