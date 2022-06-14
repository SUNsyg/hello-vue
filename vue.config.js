module.export = {
    chainWebpack: config => {
        config.plugin('html').tag(args => {
            args[0].template = '/src/public/index.html'
            return args
        })
    }
}