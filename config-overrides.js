const { override, fixBableImports } = require('customize-cra');
module.exports = override(
    fixBableImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);