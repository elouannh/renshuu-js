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
        entryPoints: ["src/*"],
        plugin: ["typedoc-material-theme", "@8hobbies/typedoc-plugin-404"],
        themeColor: "#00c4eb",
        alwaysCreateEntryPointModule: true,
        readme: "README.md",
        exclude: ["src/index.ts", "src/*/index.ts", "src/tests"],
        sort: ["alphabetical"],
        page404Content: "This page does not exist. What are you looking for?",
        hostedBaseUrl: "https://renshuu-js.elouannhosta.com",
        useHostedBaseUrlForAbsoluteLinks: true,
        name: "Renshuu.js",
        gitRevision: "branch/main",
        cleanOutputDir: true,
    });

    /**
     *
     * @type {typeDoc.ProjectReflection | undefined}
     */
    const project = await app.convert();
    if (project) {
        const outputDir = "docs";
        await app.generateDocs(project, outputDir);
        await app.generateJson(project, outputDir + "/documentation.json");
    }

    fs.writeFileSync("docs/CNAME", "renshuu-js.elouannhosta.com");
}

main().catch(console.error);