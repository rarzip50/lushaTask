const parse = require('lusha-mock-parser')
const {saveSet} = require('./redis')

async function urlParser2(url, foundUrls = []) {
    const { links, html } = parse(url)
    //save to db
    await saveSet(url, html)
    foundUrls.push({ url, html })
    if (links.length === 0) {
        return foundUrls
    } else {
        for (const link of links) {
            return await urlParser2(link, foundUrls)
        }
    }
}

async function runParser(){
    const res = await urlParser2(process.env.url)
    console.log(res)
}

runParser()