const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const fs = require("fs");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const baseViewPath = "./src/views";

const CaratePages = () => {
  const pages = {};
  fs.readdirSync(baseViewPath, { withFileTypes: true }).forEach((file) => {
    const fileName = file.name;
    pages[`${fileName}`] = {
      entry: `${baseViewPath}/${fileName}/main.ts`,
      template: `public/${fileName}.html`,
      filename: `${fileName}.html`,
      title: `${fileName}`,
      chunks: ["chunk-vendors", "chunk-common", fileName],
    };
  });
  return pages;
};

module.exports = defineConfig({
  productionSourceMap: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src")); // key,value自行定义，比如.set('@@', resolve('src/components'))
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: "all",
      cacheGroups: {
        vendor: {
          name: "vendor",
          priority: 1,
          test: /node_modules/,
          minSize: 0,
          minChunks: 1,
        },
        common: {
          name: "common",
          priority: 0,
          minSize: 0,
          minChunks: 2,
        },
      },
    });
  },
  publicPath: "./",
  configureWebpack: (config) => {
    config.cache = {
      type: "filesystem", // 使用文件缓存
    };
    config.optimization.minimize = true; // 开启minimizer
    config.optimization.minimizer.forEach((op, index) => {
      config.optimization.minimizer[index].options.parallel = true; // webpack5 对应的并发数 布尔或者数字
      // 如果是生产环境就去除打印与debugger
      if (process.env.NODE_ENV === "production") {
        if ("compress" in op.options.minimizer.options) {
          Object.assign(
            config.optimization.minimizer[index].options.minimizer.options
              .compress,
            {
              drop_debugger: true,
              drop_console: true,
            }
          );
        }
      }
    });
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/theme/style.less")], // 引入全局样式变量
    },
  },

  pages: CaratePages(),
});
