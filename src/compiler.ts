import { parse } from "./parser";
import { AmpProgram } from "./program";
import { tokenize } from "./tokenizer";

// feature customization, optimizations etc.
export interface CompilationOptions {
  programName: string;
}

export function compile(
  sources: string[],
  options: CompilationOptions,
): AmpProgram {
  const src = sources.join("\n\n");
  return parse(tokenize(src, options), options);
}
