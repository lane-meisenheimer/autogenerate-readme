const {pathExists, readFile} = require('fs-extra');
const handlebars             = require('handlebars');

/**
 * Creates a handlebars template for rendering the README.md, will default to the api output if no readme file is found
 * at the given path.
 * @param {string} templatePath - Path to the readme path,.
 * @returns {Promise<HandlebarsTemplate>} - a handlebars template with an api variable.
 */
async function createReadmeTemplate(templatePath) {

    const fileExists = await pathExists(templatePath);

    if (!fileExists) {
        return handlebars.compile('{{{api}}}')
    }

    const fileData = await readFile(templatePath, {encoding: 'utf8'});
    return handlebars.compile(fileData);
}

module.exports = createReadmeTemplate;