// Script KastrolMods v3 
// credit sc By KastrolMods 
// base ori by HW Mods & Alitatah
// Credits di atas jangan di hapus 
// mau sc full no enc?
// Hubungi : https://t.me/modvip1
const fs = require("fs")

global.owner = ["6283188792640"]
global.XznKey = ''
global.lolkey = 'GataDios'
global.apinya = ''
global.beta = ''
global.apikey_resbot = 'apiku2'
//watermark 
global.namaown = 'KastrolMods'
global.namabot = 'KastrolMods V3'
global.packname = 'KastrolMods V3'
global.author = 'KastrolMods V3'
global.foter1 = 'KastrolMods V3'
global.foter2 = 'KastrolMods V3'
global.foter3 = 'KastrolMods'
global.foter4 = ' Terverifikasi WhatsApp'
global.idcennel = ''
global.thumb = 'https://telegra.ph/file/dd86915bde9d1161501c9.jpg'
global.namastore = "KastrolMods"

global.saluran = 'https://whatsapp.com/channel/0029VabPl2d7dmeca9Ck5u2p'
global.tamnel = 'https://telegra.ph/file/dd86915bde9d1161501c9.jpg'

global.domain = 'https' // Isi Domain Lu
global.apikey = 'ptlc' // Isi Apikey Pltc Lu
global.capikey = 'ptla' // Isi Apikey Plta Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.apilinode = ''
global.apitokendo = ''

global.ovo = `Ga Ada`
global.dana = `083188792640`
global.linkaja = `3`
global.gopay = `083135889729`

global.mess = {
    success: 'Suksess Bree~',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*⏳ Sedang Di Proses !*_',
    done: '_*✅ Done !*_',
}

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});