module.exports = {
    outputDir: "Scripts/dist/vue",
    filenameHashing: false,
    configureWebpack: {
        optimization: {
            splitChunks: false,
        },
        resolve: {
            alias: {
                vue$: "vue/dist/vue.esm.js",
            },
        },
    },
    pages: {
        uidesign: {
            // entry for the page
            entry: "Scripts/src/vue/uidesign.js",
            template: "Scripts/src/vue/template/index.html",
        },
    },
};
