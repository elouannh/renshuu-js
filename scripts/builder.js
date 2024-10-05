const { rmSync, mkdirSync, existsSync } = require('fs');

/**
 * @param dir {string} The directory name to recreate.
 * @returns {*}
 */
function reset(dir) {
    if (!existsSync(dir)) return;
    rmSync(`./${dir}`, { recursive: true });
    mkdirSync(`./${dir}`);
}

/**
 * Main script of the file.
 * @returns {void}
 */
function main() {
    /**
     * The build directory and the typing directory.
     * @type {string[]}
     */
    const directories = ["dist", "typing"];

    for (const directory of directories) {
        reset(directory);
    }
}

main();