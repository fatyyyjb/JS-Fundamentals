const myFirstArg = process.argv[2];

if (myFirstArg === undefined) {
    console.log('No argument');
}
else{
    console.log(myFirstArg);
}