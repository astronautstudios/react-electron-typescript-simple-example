import path from 'path';

module.exports = {
    mode: 'development', // Use 'development' mode for better debugging; switch to 'production' for optimization
    entry: { // Entry points for the Electron main process and preload script
        main: './src/main/main.ts', // Main process entry point
        preload: './src/main/preload.ts', // Preload script for renderer process
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory for the bundled files
        filename: '[name].bundle.js', // Output file naming pattern; e.g., main.bundle.js, preload.bundle.js
    },
    target: 'electron-main', // Specifies Webpack to bundle for Electron's main process
    resolve: {
        extensions: ['.ts', '.js'], // File extensions to resolve during import
    },
    module: {
        rules: [
            {
                test: /\.ts$/, // Match all TypeScript files
                exclude: /node_modules/, // Exclude files in node_modules from being processed
                use: 'ts-loader', // Use ts-loader to transpile TypeScript into JavaScript
            },
        ],
    },
};
