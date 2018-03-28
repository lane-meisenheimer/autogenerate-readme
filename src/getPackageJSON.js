const path = require('path');

/**
 * Recursively searches for a package.json file starting at options.startPath, and stops when it finds a package.json file
 * or attempts to recurse a 6th level.
 * @param {object} options
 * @param {string} options.startPath - Starting path to look for a package.json file.
 * @param {number} options.depth - The recursive depth of the call (used to break out of the recursive calls after 5 levels).
 * @returns {object} The package.json configuration, and the mainPath for the module.
 */
function getPackageJSON(options) {
    if (!options) {
        const err = new Error('Missing options');
        throw err;
    }

    let {depth, startPath} = options;

    depth = depth || 1;
    if (depth > 5) {
        throw new Error('Can\'t resolve main package.json file');
    }
    const mainPath = depth === 1 ? startPath : path.join(Array(depth).join("../"), startPath);

    try {
        return {packageInfo: require.main.require(path.join(mainPath, 'package.json')), mainPath};
    } catch (e) {
        return getPackageJSON({depth: depth + 1, startPath});
    }
}

module.exports = getPackageJSON;

