module.exports = {
  '**/*.(js|jsx)': filenames => [`eslint --fix ${filenames.join(' ')}`, `prettier --write ${filenames.join(' ')}`],
  '**/*.(html|json|css|scss|md)': filenames => `prettier --write ${filenames.join(' ')}`
}
