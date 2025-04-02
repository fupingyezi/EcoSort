module.exports = {
  extends: ["taro/react"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  parserOptions: {
    project: './tsconfig.json', // 指定 TypeScript 配置文件路径
    sourceType: 'module', // 使用模块化的代码风格
    requireConfigFile: false, // 禁用 Babel 配置文件检查
    babelOptions: {
      configFile: "./babel.config.js", // 指定 Babel 配置文件路径
    }
  },
};
