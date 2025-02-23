// compile-time representation of program
export class Program {
  name: string;
  elements: Record<string, Element> = {};
  types: Record<string, NamedType> = {};
  nodes: Record<string, Node> = {};

  constructor(name: string) {
    this.name = name;
  }
}

interface Element {
  name: string;
  comments: string[];
}

type Type =
  | { kind: "none" }
  | { kind: "num" }
  | { kind: "array"; type: Type; len: number }
  | { kind: "sum"; def: Type[] }
  | { kind: "product"; def: Type[] };

interface NamedType extends Element {
  fields: { name: string; type: Type }[];
}

interface Constant {
  t: { kind: "numeric"; val: number } | { kind: "boolean"; val: boolean };
  length: number;
}

export interface Node extends Element {
  inputs: Record<string, Type>;
  outputs: Record<string, Type>;
  impl: NodeGraph;
}

interface NodeGraph {
  nodes: Record<string, Node>;
  edges: Record<string, string>; // "node/port": "node/port"
}

export class ProgramBuilder {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  build(): Program {
    //TODO resolve references and validate program
    return new Program("app");
  }

  //TODO construction methods
  //TODO use only string references (order independence)
  //TODO intermediate representations of program elements
}
