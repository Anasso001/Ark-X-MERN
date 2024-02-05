function drawTree(height) {
    for ( let i = 0; i < height ; i++ ) {
        let star = '*';
        let space = ' ';

        for ( let j = 1; j <= i; j++ ) {
            star = star + '**';            
        }

        let gap = space.repeat(height-i-1);
        star = gap + star;
        console.log(star);
    }
}

let number = 4;

drawTree(number);