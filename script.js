let mathResult = prompt('Choose an option: ' + '\n a) x + y ' + '\n b) x - y ' + '\n c) x / y' + '\n d) sin x' + '\n e) cos y' + '\n f) pow(x, y)' );


switch(mathResult) {
    case 'a': {
        let x = prompt('Type your first number' ); 
        let y = prompt('Type your second number' ); 
        alert('Calculations являются finished! ' + ' Sum' + ' = ' + (Number(x) + Number(y)));
        break;
    }
    case 'b': {
        let x = prompt('Type your first number' );
        let y = prompt('Type your second number' );
        alert('Calculations являются finished! ' + ' Diff' + ' = ' + (x - y));
        break;
    }
    case 'c': {
        let x = prompt('Type your first number' );
        let y = prompt('Type your second number' );
        alert('Calculations являются finished! ' + ' Div' + ' = ' + (x / y));
        break;
    }
    case 'd': {
        let x = prompt('Type your number' );
        alert('Calculations являются finished! ' + ' Sin' + ' = ' + Math.sin(x));
        break;
    }
    case 'e': {
        let x = prompt('Type your number' );
        alert('Calculations являются finished! ' + ' Cos' + ' = ' + Math.cos(x));
        break;
    }
    case 'f': {
        let x = prompt('Type your first number' );
        let y = prompt('Type your second number' );
        alert('Calculations являются finished! ' + ' Pow' + ' = ' + Math.pow(x, y));
        break;
    }
    default: alert('Choose the right option');
}
console.log('finish');
