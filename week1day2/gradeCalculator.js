function gradeCalculator(score) {
    switch (true) {
        case score > 90 && score <= 100:
            console.log(`student has scored A grade`)
            break;
        case score > 80 && score <= 90:
            console.log(`student has scored B grade`)
            break;
        case score > 70 && score <= 80:
            console.log(`student has scored C grade`)
            break;
        case score > 60 && score <= 70:
            console.log(`student has scored D grade`)
            break;
        case score > 50 && score <= 60:
            console.log(`student has scored E grade`)
            break;
        case score > 100:
            console.log(`Enter a valid score`)
            break;
        default:
            console.log(`See you in the next year`);
    }
}

let markscored = 101;
gradeCalculator(markscored);