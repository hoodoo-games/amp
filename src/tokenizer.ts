import { CompilationOptions } from "./compiler";

export function tokenize(src: string, options: CompilationOptions): Token[] {
  return [];
}

const patterns = [{ name: "ws", regex: new RegExp(`\s`) }];

export interface Token {
  name: string;
  content: string;
}
