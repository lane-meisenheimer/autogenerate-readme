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

### Generating Bitbucket Style output
Bitbucket uses the **safe** version of markdown which does not allow html tags.  To generate your project in this style
add the following to your package.json
```javascript
{
    "name": "example project"
    "autogenerate-readme": {
        "use-bitbucket": true
    }
}
```

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

## Functions

<dl>
<dt><a href="#createReadmeTemplate">createReadmeTemplate(templatePath)</a> ⇒ <code>Promise.&lt;HandlebarsTemplate&gt;</code></dt>
<dd><p>Creates a handlebars template for rendering the README.md, will default to the api output if no readme file is found
at the given path.</p>
</dd>
<dt><a href="#generateReadme">generateReadme()</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Generates a README.md file at the root project directory, with compiled jsdoc comments embedded.</p>
</dd>
<dt><a href="#getOptions">getOptions()</a> ⇒ <code>object</code></dt>
<dd><p>Reads in the options with the package.json info from either the current working directory or its parents,
and returns the source file patterns and readme template with the configured values or default values.</p>
</dd>
<dt><a href="#getPackageJSON">getPackageJSON(options)</a> ⇒ <code>object</code></dt>
<dd><p>Recursively searches for a package.json file starting at options.startPath, and stops when it finds a package.json file
or attempts to recurse a 6th level.</p>
</dd>
<dt><a href="#writeReadmeFile">writeReadmeFile(options)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Writes a README.md file at the main project directory.</p>
</dd>
</dl>

<a name="createReadmeTemplate"></a>

## createReadmeTemplate(templatePath) ⇒ <code>Promise.&lt;HandlebarsTemplate&gt;</code>
Creates a handlebars template for rendering the README.md, will default to the api output if no readme file is foundat the given path.

**Kind**: global function  
**Returns**: <code>Promise.&lt;HandlebarsTemplate&gt;</code> - - a handlebars template with an api variable.  

| Param | Type | Description |
| --- | --- | --- |
| templatePath | <code>string</code> | Path to the readme path,. |

<a name="generateReadme"></a>

## generateReadme() ⇒ <code>Promise.&lt;void&gt;</code>
Generates a README.md file at the root project directory, with compiled jsdoc comments embedded.

**Kind**: global function  
<a name="getOptions"></a>

## getOptions() ⇒ <code>object</code>
Reads in the options with the package.json info from either the current working directory or its parents,and returns the source file patterns and readme template with the configured values or default values.

**Kind**: global function  
<a name="getPackageJSON"></a>

## getPackageJSON(options) ⇒ <code>object</code>
Recursively searches for a package.json file starting at options.startPath, and stops when it finds a package.json fileor attempts to recurse a 6th level.

**Kind**: global function  
**Returns**: <code>object</code> - The package.json configuration, and the mainPath for the module.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.startPath | <code>string</code> | Starting path to look for a package.json file. |
| options.depth | <code>number</code> | The recursive depth of the call (used to break out of the recursive calls after 5 levels). |

<a name="writeReadmeFile"></a>

## writeReadmeFile(options) ⇒ <code>Promise.&lt;void&gt;</code>
Writes a README.md file at the main project directory.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.mainPath | <code>string</code> | The main project directory |
| options.data | <code>string</code> \| <code>Buffer</code> | The Readme data to write out. |



