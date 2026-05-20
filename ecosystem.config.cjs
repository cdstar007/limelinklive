const fs = require('node:fs')
const path = require('node:path')

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {}

  return fs.readFileSync(filePath, 'utf8')
    .split(/\r?\n/)
    .reduce((env, line) => {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) return env

      const separatorIndex = trimmed.indexOf('=')
      if (separatorIndex === -1) return env

      const key = trimmed.slice(0, separatorIndex).trim()
      const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '')
      if (key) env[key] = value
      return env
    }, {})
}

const productionEnv = readEnvFile(path.resolve(__dirname, '.env.production'))

module.exports = {
  apps: [
    {
      name: 'limelinklive',
      script: '.output/server/index.mjs',
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: '3010',
        ...productionEnv
      }
    }
  ]
}
