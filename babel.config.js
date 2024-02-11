module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@': './src',
					'@screens': './src/screens',
					'@components': './src/components',
					'@utils': './src/utils',
					'@types': './src/types',
				},
			},
		],
	],
};
