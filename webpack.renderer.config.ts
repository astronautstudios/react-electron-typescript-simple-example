// webpack.config.ts
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    mode: 'development', // Use 'development' for easier debugging; switch to 'production' for optimized builds
    entry: './src/renderer/index.tsx', // Entry point for the renderer process
    target: 'web', // Specifies that the target environment is a web browser (renderer is HTML/JS/CSS)
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory for the bundled files
        filename: 'renderer.bundle.js', // Output file for the renderer process
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], // File extensions to resolve during imports
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // Match TypeScript and TSX files
                exclude: /node_modules/, // Exclude node_modules from processing
                use: 'ts-loader', // Use ts-loader to transpile TypeScript to JavaScript
            },
            {
                test: /\.css$/, // Match CSS files
                use: ['style-loader', 'css-loader'], // Load and inject CSS styles into the DOM
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/renderer/index.html', // HTML template to use for the renderer
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Serve files from the output directory
        port: 3000, // Port for the development server
        hot: true, // Enable Hot Module Replacement (HMR) for live updates
        open: true, // Automatically open the app in the browser when the server starts
    },
};
