// compile-time representation of program
export class Program {
  root: Node;
  elements: Record<string, Element> = {};

  constructor(name: string) {
    this.root = {
      name,
      comments: [],
      public: true,
      export: false,
      inputs: [],
      outputs: [],
      impl: { kind: "graph", graph: { nodes: [], edges: {} } },
    };
  }
}

interface Element {
  name: string;
  comments: string[];
}

type Type =
  | { kind: "none" }
  | { kind: "int" }
  | { kind: "uint" }
  | { kind: "num" }
  | { kind: "bool" }
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
  public: boolean;
  export: boolean;
  inputs: Port[];
  outputs: Port[];
  impl: { kind: "import" } | { kind: "graph"; graph: NodeGraph };
}

interface NodeGraph {
  nodes: string[];
  edges: Record<string, string>; // "node/port": "node/port"
}

interface Port {
  name: string;
  type: Type;
}

export class ProgramBuilder {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  build(): Program {
    //TODO validate program
    return new Program("app");
  }

  //TODO construction methods
}
