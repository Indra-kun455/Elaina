/**
   * Made By Fandyyy 🕴️
   * Nomer 088980303928
   * Follow https://instagram.com/ownerbotz
   * Follow https://github.com/ndra-kun455
*/

const fs = require('fs')
const chalk = require('chalk')

//===> SESUAIKAN DENGAN KEBUTUHAN MU
global.ownerNumber = ['6288980303928'] //['62××××××××','62×××××××'] terserah kalian asal ada (') & (,) 
global.Rowner = '6288980303928' //Owner Utama Kids
global.ownerName = 'Itsuka Indra' //Ganti aja q iklas (︶｡︶)
global.packname = 'Elaina' 
global.author = '©Itsuka Indra'
global.prefa = ['','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'session' //Saran Gausah Diganti Lagi
global.webme = 'https://github.com/Indra-kun455' //Ganti Jadi Bebas Web Sosmed Mu
global.sosmed = 'https://www.instagram.com/ownerbotz' //Ganti Jadi Web Sosmed Mu

//====> SARAN GAUSAH DIGANTI SIH DAH PAS SEMUA
global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
global.multiplier = 69 // Semakin Tinggi Nilai nya Semakin Sulit Naik Level
global.limitEnd = 'Limit Kamu Telah Habis Silahkan Buy Di Shop Atau Tunggu Sampai Limit Reset'
global.fiturOff = '❎ Fitur Tidak Diaktifkan'
global.fiturError = 'Fitur Sedang Error ❎'

//===> BOT SETTINGS
global.autobackup = true //Ganti Ke false Kalau Gamau Di Kirimin File Setiap Hari
global.autoread = false //Ganti ke false kalau gamau smua chat di read sama bot
global.autotyping = false //Ganti ke false kalau gamau auto mengetik kalau ada chat masuk ke wa bot
global.available = false //Ganti ke true kalau pengen bot nya keliatan online terus
global.autolevelup = true //Ganti ke false klo gamau ada peningkatan exp user mu

//===> SESUAIKAN DENGAN KEBUTUHAN MU 
global.mess = {
admin: '*Kamu Bukan Admin!*',
botAdmin: '*(︶｡︶)!*',
botOwner: '*Kamu Bukan Dewaku!*',
group: '*Khusus Group!*',
private: '*Khusus Private Chat!*',
wait: '*Tunggu Sebentar Om.......*',
done: '*ꈍᴗꈍ*',
prem: '*Khusus User Premium*'
}

//===> KALAU GANTI FOTO GANTI JUGA NAMA NYA
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/elaina.jpg')
global.doc = fs.readFileSync('./media/roy.jpg')

//===> UCAPAN WELCOME AND LEAVE
global.quotes = {
welcome: 'Semoga Kamu Betah Berada Disini Dan Jangan Lupa Untuk Selalu Mengikuti Rules Yang Ada',
leave: 'Semoga Amal Ibadahmu Diterima Disisi-Nya'
}

//===> QUOTES SETIAP MENU
global.quotes1 = 'Apabila Akal Tidak Sempurna Maka Kurangilah Berbicara. ~Ali Bin Abi Thalib'
global.quotes2 = 'Orang Yang Suka Berkata Jujur Mendapatkan Tiga Hal, Yakni Kepercayaan, Cinta, dan Rasa Hormat. ~Ali Bin Abi Thalib'
global.quotes3 = 'Balas Dendam Terbaik Adalah Menjadikan Dirimu Lebih Baik. ~Ali Bin Abi Thalib'

//===> TIPS BAGIAN MENU
global.tips1 = 'Gunakan Jeda 3 Detik Agar Bot Tidak Mati Akibat Spam 🚀'
global.tips2 = 'Jika Kamu Ingin Bermain RPG Hubungi Admin Untuk Mengaktifkan Fitur RPG ⚔️'
global.tips3 = 'Jika Kamu Ingin Request/Repport Fitur, Cukup Ketik *.req/lapor Laporannya* 👮'
global.tips4 = 'Jika Kamu Sedang Gabut, Kamu Bisa Memainkan Fitur Game Yang Tersedia 🕹️'
global.tips5 = 'Jika Kamu Ingin Mendownload Video Youtube, Cukup Ketik *.ytmp4 <link>* 📥'

//===> UBAH EMOJI RPG DISINI
global.emot = {
role: '🥶',
level: '🥶️',
limit: '🥶',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🥶',
trash: '🥵',
armor: '🥵',
sword: '🥵',
wood: '🥶',
batu: '🥶',
string: '🥵️',
horse: '🥵',
cat: '🥶',
dog: '🥶',
fox: '🥶',
petFood: '🥶',
iron: '🥶',
gold: '🥶',
emerald: '🥶',
budak: '🥶',
busur: '🥶',
panah: '🥶',
kapak: '🥶'
}

//===> JANGAN DI HAPUS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
