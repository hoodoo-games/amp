// compile-time representation of program
export class Program {
  name: string;
  elements: Record<string, Element> = {};

  constructor(name: string) {
    const rootNode = {
      name,
      public: false,
      comments: [],
      export: false,
      inputs: [],
      outputs: [],
      impl: { kind: "graph", graph: { nodes: [], links: {} } },
    };

    this.elements[name] = rootNode;
    this.name = name;
  }

  element(e: Element): Program {
    this.elements[e.name] = e;
    return this;
  }

  validate() {}
}

export interface Element {
  name: string;
  public: boolean;
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

//TODO type comparisons (subset/superset)

interface NamedType extends Element {
  fields: { name: string; type: Type }[];
}

export interface Node extends Element {
  export: boolean;
  inputs: Port[];
  outputs: Port[];
  impl: NodeImpl;
}

interface Port {
  name: string;
  type: Type;
}

type ConstValue = number | boolean | string;

type NodeImpl =
  | { kind: "op" }
  | { kind: "const"; values: ConstValue[] }
  | { kind: "import" }
  | { kind: "graph"; graph: NodeGraph };

interface NodeGraph {
  nodes: string[];
  links: Record<string, string>; // "node/port": "node/port"
}
