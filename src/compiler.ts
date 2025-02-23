import { parse } from "./parser";
import { Program } from "./program";
import { tokenize } from "./tokenizer";

export interface CompilationOptions {
  programName: string;
}

//TODO rename to something loading/parsing related
export function compile(
  sources: string[],
  options: CompilationOptions,
): Program {
  const src = sources.join("\n\n");
  return parse(tokenize(src, options), options);
}
