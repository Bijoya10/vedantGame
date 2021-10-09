function createBoard() {
    for (let j = 0; j < 400; j = j + 50) {

        for (let i = 0; i < 400; i = i + 50) {
            board.push(createSprite(i + 25, j + 25, 50, 50));
            if (j % 100 === 0) {
                if (i % 100 === 0) {
                    board[board.length - 1].shapeColor = "brown"
                } else {
                    board[board.length - 1].shapeColor = "white"
                }
            } else {
                if (i % 100 === 0) {
                    board[board.length - 1].shapeColor = "white"
                } else {
                    board[board.length - 1].shapeColor = "brown"
                }
            }
        }
    }
}

function createPieces() {   
    for (let i = 0; i < 8; i++) {
        pwhite.push(new PawnWhite(i * 50 + 25, 50 + 25,"pawnWhite"+i));
        pblack.push(new PawnBlack(i * 50 + 25, 300 + 25,"pawnBlack"+i))
    }
    elephantB = createSprite(25, 375, 25, 25);
    elephantB.addImage("oueen", elephantbim);
    elephantB.scale = 0.13
    elephantb1 = createSprite(375, 375, 25, 25);
    elephantb1.addImage("oueen", elephantbim);
    elephantb1.scale = 0.13
    elephantW = createSprite(375, 25, 25, 25);
    elephantW.addImage("oueen", elephantwim);
    elephantW.scale = 0.2
    elephantW1 = createSprite(25, 25, 25, 25);
    elephantW1.addImage("oueen", elephantwim);
    elephantW1.scale = 0.2

    knightb1 = createSprite(75, 375, 25, 25);
    knightb1.addImage("oueen", knightbim);
    knightb1.scale = 0.43
    knightb2 = createSprite(325, 375, 25, 25);
    knightb2.addImage("oueen", knightbim);
    knightb2.scale = 0.43
    knightw1 = createSprite(75, 25, 25, 25);
    knightw1.addImage("oueen", knightwim);
    knightw1.scale = 0.1
    knightw2 = createSprite(325, 25, 25, 25);
    knightw2.addImage("oueen", knightwim);
    knightw2.scale = 0.1

    bishopb1 = createSprite(125, 375, 25, 25);
    bishopb1.addImage("oueen", bishopbim);
    bishopb1.scale = 0.1
    bishopb2 = createSprite(275, 375, 25, 25);
    bishopb2.addImage("oueen", bishopbim);
    bishopb2.scale = 0.1
    bishopw1 = createSprite(125, 25, 25, 25);
    bishopw1.addImage("oueen", bishopwim);
    bishopw1.scale = 0.1
    bishopw2 = createSprite(275, 25, 25, 25);
    bishopw2.addImage("oueen", bishopwim);
    bishopw2.scale = 0.1

    bking = createSprite(175, 375, 25, 25);
    bking.addImage("oueen", bkingim);
    bking.scale = 0.1
    wking = createSprite(175, 25, 25, 25);
    wking.addImage("oueen", wkingim);
    wking.scale = 0.1

    bqueen = createSprite(225, 375, 25, 25);
    bqueen.addImage("oueen", bqueenim);
    bqueen.scale = 0.09
    wqueen = createSprite(225, 25, 25, 25);
    wqueen.addImage("oueen", wqueenim);
    wqueen.scale = 0.2
}