module.exports = (title, spec) => {
    try {
        spec();
        console.log(`success -> ${title}`);
    } catch(e) {
        process.exitCode = 1;
        console.log(`fail -> ${title}`);
    }
};

