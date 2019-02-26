type StructureType = Array<string[]>;

enum BoxEnum {
  PartOfPath = '0',
  Obstacle = '+',
  Tried = '.',
  DeadEnd = '-'
}

export class Maze {
  public structure: StructureType;
  public ctx: CanvasRenderingContext2D;

  public startRow: number;
  public startCol: number;

  // public xTranslate: number;
  // public yTranslate: number;

  public rowsInMaze: number;
  public columnsInMaze: number;

  constructor(structure: StructureType, ctx: CanvasRenderingContext2D) {
    this.structure = structure;
    this.ctx = ctx;

    for (let rowIdx = 0; rowIdx < structure.length; rowIdx++) {
      for (let colIdx = 0; colIdx < structure[rowIdx].length; colIdx++) {
        if (structure[rowIdx][colIdx] === 'S') {
          this.startCol = colIdx;
          this.startRow = rowIdx;
        }
      }
    }

    this.rowsInMaze = structure.length;
    this.columnsInMaze = structure[0].length;

    // this.xTranslate = this.columnsInMaze / 2;
    // this.yTranslate = this.rowsInMaze / 2;
  }

  public drawMaze() {
    for (let y = 0; y < this.rowsInMaze; y++) {
      for (let x = 0; x < this.columnsInMaze; x++) {
        if (this.structure[y][x] === BoxEnum.Obstacle) {
          this.drawCenteredBox(x * 50, y * 50, 'blue');
        } else {
          this.dropBreadCrumb(x  * 50, y * 50, 'green');
        }
      }
    }
  }

  public dropBreadCrumb(x: number, y: number, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x + 25, y + 25, 5, 0, Math.PI * 2, true);
    this.ctx.fill();
    this.ctx.closePath();
  }

  public updatePosition(row, col, val = null) {
    if (val) {
      this.structure[row][col] = val;
    }

    let color: string;

    switch(val) {
      case BoxEnum.PartOfPath: color = 'green'; break;
      case BoxEnum.Obstacle: color = 'red'; break;
      case BoxEnum.Tried: color = 'black'; break;
      case BoxEnum.DeadEnd: color = 'red'; break;
    }

    if (color) {
      this
    }
  }

  private drawCenteredBox(x: number, y: number, color: string): void {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, 50, 50);
    this.ctx.fillStyle = undefined;
  }
}