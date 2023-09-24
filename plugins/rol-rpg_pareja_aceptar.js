let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, 𝑌𝐴 𝐸𝑆 𝐻𝑂𝑅𝐴 𝐷𝐸 𝑄𝑈𝐸 𝑇𝐸 💍 𝐶𝐴𝑆𝐸𝑆 𝐶𝑂𝑁 ${toM(b)}, 𝐿𝐼𝑁𝐷𝐴 𝑃𝐴𝑅𝐸𝐽𝐴 🥰💓*

*${toM(a)}, 𝐼𝑇'𝑆 𝐴𝐵𝑂𝑈𝑇 𝑇𝐼𝑀𝑅 𝑌𝑂𝑈 💍 𝑀𝐴𝑅𝑅𝐼 ${toM(b)}, 𝐶𝑈𝑇𝐸 𝑃𝑂𝑈𝑃𝐿𝐸 😍💓*`, null, {
mentions: [a, b]
  
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','formarparejas']
handler.group = true
export default handler
