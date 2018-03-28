# autogenerate-readme #
A NodeJs package for generating a readme file from jsdoc comments embedded in your application source.  This README file
was generated using autogenerate-readme.

## Installation ##
To install this package run
```bash
npm install autogenerate-readme
```

## Configuration ##

autogenerate-readme allows the following configuration options

| Option | Type | Description |
| --- | --- | --- |
| srcFiles | Array<string> | An array of glob patterns to pull jsdoc comments from. |
| template | string | The path to a README.md handlebars template. |

These configuration options may be set in the package.json file at the root of your project, or if omitted autogenerate-readme will use a set of default
values.

each option with its default values is shown in the example package.json below:

```javascript
{
    "name": "example project"
        "autogenerate-readme": {
        "srcFiles": ["./src/**/*.js"],
        "template": "./docs/README.md.hbs"
    }
}
```
#### Note: All paths should be relative to the package.json file. ####

## Running ##
### Warning: Running the generation will overwrite any existing README.md file. ###

To run the generation add the following to your package.json scripts file
```javascript
    {
        "name": "example project"
        "scripts": {
            "docs": "gen-docs"
        }
    }
```
Then run:

```bash
yarn run docs
```
When the script completes the compiled README.md will exist at the root level of your project.

## Package Docs ##


## createReadmeTemplate(templatePath) ⇒ Promise.<HandlebarsTemplate>
Creates a handlebars template for rendering the README.md, will default to the api output if no readme file is found
at the given path.

**Kind**: global function  
**Returns**: Promise.<HandlebarsTemplate> - - a handlebars template with an api variable.  

| Param | Type | Description |
| --- | --- | --- |
| templatePath | string | Path to the readme path,. |

## generateReadme() ⇒ Promise.<void>
Generates a README.md file at the root project directory, with compiled jsdoc comments embedded.

**Kind**: global function  
## getOptions() ⇒ object
Reads in the options with the package.json info from either the current working directory or its parents,
and returns the source file patterns and readme template with the configured values or default values.

**Kind**: global function  
## getPackageJSON(options) ⇒ object
Recursively searches for a package.json file starting at options.startPath, and stops when it finds a package.json file
or attempts to recurse a 6th level.

**Kind**: global function  
**Returns**: object - The package.json configuration, and the mainPath for the module.  

| Param | Type | Description |
| --- | --- | --- |
| options | object |  |
| options.startPath | string | Starting path to look for a package.json file. |
| options.depth | number | The recursive depth of the call (used to break out of the recursive calls after 5 levels). |

## writeReadmeFile(options) ⇒ Promise.<void>
Writes a README.md file at the main project directory.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | object |  |
| options.mainPath | string | The main project directory |
| options.data | string ⎮ Buffer | The Readme data to write out. |



