import fs from 'fs/promises';
import path from 'path';

async function main() {
  const rootDir = process.cwd();
  const distDir = path.join(rootDir, 'dist');
  const packageJsonPath = path.join(rootDir, 'package.json');
  const readmePath = path.join(rootDir, 'README.md');

  // 1. Create a clean package.json for publishing
  const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
  const packageData = JSON.parse(packageJsonContent);

  // Remove fields that are not needed in the published package
  delete packageData.scripts;
  delete packageData.devDependencies;
  delete packageData.overrides;
  // When publishing from 'dist', all files within it are included by default.
  // The 'files' key from the root package.json is no longer needed.
  delete packageData.files;

  // Function to remove './dist/' prefix from paths
  const adjustPath = (p) => {
    if (p && typeof p === 'string' && p.startsWith('./dist/')) {
      return `.${p.substring('./dist'.length)}`;
    }
    return p;
  };

  // Adjust top-level path fields
  packageData.main = adjustPath(packageData.main);
  packageData.module = adjustPath(packageData.module);
  packageData.types = adjustPath(packageData.types);
  packageData.style = adjustPath(packageData.style);

  // Adjust paths inside 'exports'
  if (packageData.exports) {
    for (const key in packageData.exports) {
      const entry = packageData.exports[key];
      if (typeof entry === 'string') {
        packageData.exports[key] = adjustPath(entry);
      } else if (typeof entry === 'object' && entry !== null) {
        for (const type in entry) {
          entry[type] = adjustPath(entry[type]);
        }
      }
    }
  }

  const distPackageJsonPath = path.join(distDir, 'package.json');
  await fs.writeFile(distPackageJsonPath, JSON.stringify(packageData, null, 2), 'utf-8');
  console.log('Created a clean package.json in dist/');

  // 2. Copy README.md to dist
  try {
      await fs.copyFile(readmePath, path.join(distDir, 'README.md'));
      console.log('Copied README.md to dist/');
  } catch (error) {
      console.warn('Could not copy README.md. This is not critical.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
