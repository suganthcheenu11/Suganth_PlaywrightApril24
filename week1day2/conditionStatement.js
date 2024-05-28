function launchBrowser(broName) {
    if (broName == "Chrome") {
        console.log(`Browser is ${broName}`)
    } else {
        console.log("Chrome Not detected.")
    }
}

function runTests(testType) {

    switch (testType) {
        case "Sanity":
            console.log(`We are doing ${testType} testing`);
            break;
        case "Regression":
            console.log(`We are doing ${testType} testing`);
            break;
        default:
            console.log(`We are doing smoke testing`);

    }
}

let browser = "Edge";
launchBrowser(browser);
let test = "abc";
runTests(test);
