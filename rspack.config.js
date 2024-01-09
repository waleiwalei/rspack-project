const rspack = require("@rspack/core");
const { VueLoaderPlugin } = require("vue-loader");
const browserslist = require('browserslist');
const isDev = process.env.NODE_ENV == "development";
/** @type {import('@rspack/cli').Configuration} */
const config = {
    context: __dirname,
    entry: {
        main: "./src/main.js"
    },
    plugins: [
        new VueLoaderPlugin(),
        new rspack.HtmlRspackPlugin({
            template: "./index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    experimentalInlineMatchResource: true,
                    compilerOptions: {
                        whitespace: 'condense',
                    },
                }
            },
            {
                test: /\.vue$/,
                resourceQuery: /type=style/,
                sideEffects: true,
            },
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/, // 注释掉，构建产物没有class,放开构建产物有class
                include: [/src/, /node_modules\/dom7/, /node_modules\/swiper/],
                use: [
                    {
                        loader: "builtin:swc-loader",
                        options: {
                            sourceMap: true,
                            jsc: {
                                parser: {
                                    syntax: "typescript",
                                    decorators: true,
                                    // tsx: false
                                }
                            },
                            env: {
                                targets: browserslist(),
                                mode: 'usage',
                                coreJs: 3,
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg/,
                type: "asset/resource"
            }
        ]
    },
    optimization: {
        realContentHash: false,
        splitChunks: {
            cacheGroups: {
                // vendors: {
                //     name: 'vendors',
                //     test: /[\\/]node_modules[\\/]/,
                //     priority: -10,
                //     chunks: 'initial',
                // },
                // common: {
                //     name: 'common',
                //     minChunks: 1,
                //     priority: -20,
                //     chunks: 'initial',
                //     reuseExistingChunk: true,
                // },
            },
        },
    }
};
module.exports = config;
