module.exports = {
    devOptions: {
        port: 3000
    },

    mount: {
        src: "/dist",
        public: {url: "/", static: true}
    },
    buildOptions: {
        baseUrl: "./"
    },

    plugins: [
        [
            '@snowpack/plugin-webpack', {
                htmlMinifierOptions: false
            }
        ]
    ]
}