import { CompilationOptions } from "./compiler";
import { AmpProgram, AmpProgramBuilder } from "./program";
import { Token } from "./tokenizer";

export function parse(
  tokens: Token[],
  options: CompilationOptions,
): AmpProgram {
  const prog = new AmpProgramBuilder(options.programName);

  //TODO parse token stream into elements

  return prog.build();
}
