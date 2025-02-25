import { Node, Program } from "./program";

// runtime representation and state of program
export class Interpreter {
  program: Program;
  root: NodeInstance;
  nodes: NodeInstance[] = [];

  constructor(program: Program) {
    program.validate();
    this.program = program;
    this.root = new NodeInstance(program.root(), this);
  }

  run() {
    console.log(this.nodes);
  }
}

class NodeInstance {
  node: Node;

  constructor(node: Node, interpreter: Interpreter) {
    this.node = node;

    // recursively instantiate nodes
    switch (node.impl.kind) {
      case "op": {
        //TODO instantiate builtin op
        break;
      }

      case "const": {
        //TODO instantiate constant
        break;
      }

      case "import": {
        //TODO instantiate import
        break;
      }

      case "graph": {
        for (const n of node.impl.graph.nodes) {
          new NodeInstance(
            interpreter.program.elements[n] as Node,
            interpreter,
          );
        }

        break;
      }
    }
  }
}
