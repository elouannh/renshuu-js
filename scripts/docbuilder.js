const typeDoc = require("typedoc");
const fs = require("node:fs");

/**
 * The main function of the file.
 * @returns {Promise<void>}
 */
async function main() {
    /**
     *
     * @type {typeDoc.Application}
     */
    const app = await typeDoc.Application.bootstrapWithPlugins({
        tsconfig: "tsconfig.json",
        entryPoints: ["src/"],
        entryPointStrategy: "Expand",
        plugin: ["typedoc-material-theme"],
        alwaysCreateEntryPointModule: true,
        readme: "README.md",
        exclude: ["src/index.ts", "src/*/index.ts", "src/tests"],
        sort: ["kind", "alphabetical"],
        hostedBaseUrl: "https://renshuu-js.elouannhosta.com",
        name: "Renshuu.js",
        gitRevision: "branch/main",
        cleanOutputDir: true,
        excludeReferences: true,
    });

    /**
     *
     * @type {typeDoc.ProjectReflection | undefined}
     */
    const project = await app.convert();
    if (project) {
        /**
         *
         * @type {string}
         */
        const outputDir = "docs";
        await app.generateDocs(project, outputDir);
        await app.generateJson(project, outputDir + "/documentation.json");
    }

    fs.writeFileSync("docs/CNAME", "renshuu-js.elouannhosta.com");
}

main().catch(console.error);