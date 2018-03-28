const path           = require('path');
const getPackageJSON = require('./getPackageJSON');

/**
 * Reads in the options with the package.json info from either the current working directory or its parents,
 * and returns the source file patterns and readme template with the configured values or default values.
 * @returns {object}
 */
function getOptions() {
    const {packageInfo, mainPath} = getPackageJSON({startPath: process.cwd()});

    const readGenOptions = packageInfo['autogenerate-readme'] || {};

    const templatePath = readGenOptions.template || './docs/README.md.hbs';

    const readmeTemplatePath = path.join(mainPath, templatePath);

    if (readGenOptions.srcFiles && !Array.isArray(readGenOptions.srcFiles)) {
        const err = new Error('autogenerate-readme.srcFiles must be an array');
        throw err;
    }

    const srcFiles = (readGenOptions.srcFiles || ['./src/**/*.js']).map(localPath => path.join(mainPath, localPath));

    return {
        srcFiles,
        readmeTemplatePath,
        mainPath
    };
}

module.exports = getOptions;