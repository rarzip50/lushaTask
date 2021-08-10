import { spawn } from 'child_process'

export const getSubSubUrls = async (url: string): Promise<string> => {
  console.log(`Getting all sub urls of: ${url}`)
  return new Promise((resolve, reject) => {
    const child = spawn('node', ["src/utils/parser.js"], { env: { url } })
    child.stdout.on('data', (data) => {
      const subUrls = String(data)
      console.log(`finished getting urls: ${subUrls}`)
      resolve(subUrls)
    });
    child.stderr.on("error", (data)=>{
      reject(String(data))
    })
  })
}


