import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "╰⊱𖤍❥︎ *𝐿𝑂 𝑈𝑆𝑂́ 𝑀𝐴𝐿 | 𝑈𝑆𝐸𝐷 𝐼𝑇 𝑊𝑅𝑂𝑁𝐺* ⊱𖤍⊱╮\n\𝐴𝐺𝑅𝐸𝐺𝑈𝐸́ 𝑈𝑁 𝑇𝐸𝑋𝑇𝑂 𝑃𝐴𝑅𝑆 𝐶𝑅𝐸𝐴𝑅 𝐸𝐿 𝑆𝑇𝐼𝐶𝐾𝐸𝑅 "
   if (!text) return m.reply('𝑌 𝐸𝐿 𝑇𝐸𝑋𝑇𝑂🤬?')
   if (text.length > 30) return m.reply('𝑀𝐴𝑋𝐼𝑀𝑂 30 𝑃𝐴𝐿𝐴𝐵𝑅𝐴𝑆☃︎')
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#000000",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(qc)$/i

export default handler
