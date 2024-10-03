import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const fcmSwEnvPlugin = () => {
  const __fileName = fileURLToPath(import.meta.url)
  const __dirName = path.dirname(__fileName)

  const srcDir = path.resolve(__dirName, '../src')
  const fcmSwCode = fs.readFileSync(`${srcDir}/firebase-messaging-sw.js`, 'utf-8')

  const transformedCode = fcmSwCode.replace(/import\.meta\.env\.(\w+)/g, (_, varName) => {
    console.log(varName)
    return `"${process.env[varName]}"`
  })

  console.log(transformedCode)

  const finalCode =
    '// IMPORTANT: This file only exists for dev mode purposes.\n' +
    '// Do not modify this file. Any changes should be made in `src/firebase-messaging-sw.js`.\n\n' +
    transformedCode

  const outputPath = path.resolve("public", './firebase-messaging-sw.js')
  fs.writeFileSync(outputPath, finalCode)

  return {
    name: 'rollup-plugin-fcm-sw-env'
  }
}

export default fcmSwEnvPlugin
