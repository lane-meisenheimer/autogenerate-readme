const {writeFile} = require('fs-extra');
const {join}      = require('path');

/**
 * Writes a README.md file at the main project directory.
 * @param {object} options
 * @param {string} options.mainPath - The main project directory
 * @param {string | Buffer} options.data - The Readme data to write out.
 * @returns {Promise<void>}
 */
async function writeReadmeFile(options) {
    const {mainPath, data} = options;
    await writeFile(join(mainPath, 'README.md'), data, {encoding: 'utf8'});
}

module.exports = writeReadmeFile;