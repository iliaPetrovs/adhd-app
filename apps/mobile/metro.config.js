const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Explicitly map the workspace package so Metro doesn't need to follow symlinks
config.resolver.extraNodeModules = {
  '@adhd-app/ui': path.resolve(workspaceRoot, 'packages/ui/src'),
};

module.exports = config;
