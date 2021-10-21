const { override, fixBableImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBableImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
);