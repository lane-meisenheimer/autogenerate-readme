#! /usr/bin/env node
const jsdoc2md             = require('jsdoc-to-markdown');
const getOptions           = require('./getOptions');
const createReadmeTemplate = require('./createReadmeTemplate');
const writeReadmeFile      = require('./writeReadmeFile');

/**
 * Generates a README.md file at the root project directory, with compiled jsdoc comments embedded.
 * @returns {Promise<void>}
 */
async function generateReadme() {
    const {srcFiles, readmeTemplatePath, mainPath} = getOptions();

    const readmeTemplate = await createReadmeTemplate(readmeTemplatePath);
    const apiDocs        = await jsdoc2md.render({
        files: srcFiles,
        plugin: ['dmd-bitbucket']
    });

    await writeReadmeFile({
        mainPath,
        data: readmeTemplate({api: apiDocs})
    });

    console.log(`Generated Readme at ${mainPath}/README.md`);
}

generateReadme().catch((e) => {
    console.log('Error generating the readme');
    console.error(e);
});