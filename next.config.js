// /** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withLess = require('@zeit/next-less');

// module.exports = withLess({
// 	cssModules: true,
// 	reactStrictMode: true,
// 	swcMinify: true,
// });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withLess = require('next-with-less');

module.exports = withLess({
	reactStrictMode: true,
	lessLoaderOptions: {},
});
