enum Directions {'Up', 'Down', 'Left', 'Right'}

type Player = {
    x: number,
    y: number,
    move: (direction: Directions, amount: number) => void,
}

const player: Player = {
    x: 0,
    y: 0,
    move: function (direction: Directions, amount: number) {
        switch (direction) {
            case Directions.Up:
                this.y += amount;
                break;
            case Directions.Down:
                this.y -= amount;
                break;
            case Directions.Left:
                this.x -= amount;
                break;
            case Directions.Right:
                this.x += amount;
                break;
            default:
                break;
        }
    }
}

player.move(Directions.Up, 1);
player.move(Directions.Down, 2);
player.move(Directions.Left, 2);
player.move(Directions.Right, 3);

// енамчики позволяют избавиться от ошибок во время написания строк, явно указывают на то
// что обозначает данный раздел в памяти и в принципе выглядит более декларативно
