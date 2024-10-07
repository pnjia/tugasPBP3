// percabangan

function menghitungTotalKalori(menitLari=0, menitPushUp=0, menitPlank=0) {
    let totalKalori = 0;

    if (menitLari > 0) {
        const kaloriPer5Menit = 60;
        totalKalori += (menitLari / 5) * kaloriPer5Menit;
    }

    if (menitPushUp > 0) {
        const kaloriPer30Menit = 200;
        totalKalori += (menitPushUp / 30) * kaloriPer30Menit;
    }

    if (menitPlank > 0) {
        const kaloriPer1Menit = 5;
        totalKalori += menitPlank * kaloriPer1Menit;
    }

    return totalKalori;
}

console.log(`Total kalori: ${menghitungTotalKalori(5, 30)}`)




// perulangan
// membalik kata
let kalimat = "pemeliharaan"
let kalimatDibalik = ''
for (let i = kalimat.length-1; i >= 0; i--) {
    kalimatDibalik += `${kalimat[i]}`
}
console.log("Kalimat awal: " + kalimat)
console.log("Kalimat setelah dibalik: " + kalimatDibalik)
console.log(' ')
// menghitung pangkat dari sebuah bilangan
let angka = 8
let hasilPangkat = angka
for (let i = 1; i < angka; i++){
    hasilPangkat += angka
    
}
console.log("Angka: " + angka)
console.log("Setelah dipangkat: "+hasilPangkat)
console.log(' ')

// menghitung faktorial
angka = 4
let hasilFaktorial = 1;
for (let i = 1; i <= angka; i++) {
     hasilFaktorial *= i
}
console.log("Angka: " + angka)
console.log("Faktorialnya: " + hasilFaktorial)
console.log(' ')

// menghapus spasi dari sebuah kalimat
kalimat = "hai saya adalah seorang developer"
let kalimatSpasiHilang = ''
for (let i = 0; i < kalimat.length; i++) {
    if(kalimat[i] !== " "){
        kalimatSpasiHilang += kalimat[i]
    }
    
}
console.log("Kalimat awal: " + kalimat)
console.log("Setelah dihilangkan spasi: " + kalimatSpasiHilang)
console.log(' ')

// mengecek email apakah valid atau tidak 
let email = "panjiangkasaputra67@gmail.com"
let valid = false;
let addSymbol = false;
let titik = false
for (let i = 0; i < email.length; i++) {
    let karakter = email[i]
    
    if(karakter === ' '){
        valid = false
        break;
    }
    if (karakter === '@'){
        addSymbol = true
    }
    if(addSymbol && karakter === '.'){
        titik = true
    }
    valid = addSymbol && titik
    
}
console.log("Email: " + email)
console.log("Valid: " + valid)
console.log(' ')

// palindrome
const kata = "kAsur ini rusak"
let isPalindrome = false;
let kataDibalik = '';
for (let i = kata.length-1; i >= 0; i--) {
  kataDibalik += `${kata[i]}`
}
if (kata.toLowerCase() === kataDibalik.toLowerCase()) {
  isPalindrome = true
}
console.log(`kata '${kata}' merupakan palindrome: ${isPalindrome} `)
console.log(' ')




function apakahPalindrome(num) {
  const str = num.toString()  
  return str === str.split('').reverse().join('')
} 

function mencariNextPalindrome(num) {
  num++;
  while(!apakahPalindrome(num)){
    num++
  }
  return num
}
num = 90
console.log(`Angka terdekat dari ${num} adalah ${mencariNextPalindrome(num)}`)
console.log(' ')

// Array
// array yang digunakan untuk menyimpan nilai pemrograman JAVA yang terdiri dari nama dan nilai
let namaDanNilai = [["Fahri", 84], ["Panji", 80], ["Firga", 90], ["Dean", 78], ["Ken", 79], ["Bernard", 68], ["Patrick", 50]];
let totalNilai = 0
let namaYangLulus = ''
let namaYangTidakLulus = ''
let namaNilaiTerbesar = ''
for(let i = 0; i < namaDanNilai.length; i++) {
    totalNilai += namaDanNilai[i][1]
    if(namaDanNilai[i][1] > 70){
        namaYangLulus += `${namaDanNilai[i][0]}, `
    } else {
        namaYangTidakLulus += `${namaDanNilai[i][0]}, `
    }
}
let nilaiTertinggi = namaDanNilai[0][1]
let namaNilaiTertinggi = ''
for (let i = 1; i < namaDanNilai.length; i++) {
    if(namaDanNilai[i][1] > nilaiTertinggi){
        nilaiTertinggi = namaDanNilai[i][1]
        namaNilaiTertinggi = namaDanNilai[i][0] 
    }
}
let rataRata = totalNilai/namaDanNilai.length
console.log("Nilai rata-rata: "+rataRata)
console.log("Nama yang lulus: " + namaYangLulus)
console.log("Nama yang tidak lulus: " + namaYangTidakLulus)
console.log(`Nilai tertinggi dipegang oleh ${namaNilaiTertinggi} dengan nilai ${nilaiTertinggi}`)
console.log(" ")

// Buatlah array yang digunakan untuk menyimpan nama mahasiswa
let namaMahasiswa = ["Maul", "Andi", "Hermawan", "Yusri", "Riski", "Aldi", "Alabasta", "Limbad"]
let namaAwalHurufA = ''
let namaTerpanjang = namaMahasiswa[0]
let namaTerpendek = namaMahasiswa[0]

for(let i = 0; i < namaMahasiswa.length; i++) {
    if(namaMahasiswa[i][0].toLowerCase() === 'a'){
        namaAwalHurufA += `${namaMahasiswa[i]}, `
    
    }
    
}

for (let i = 1; i < namaMahasiswa.length; i++) {
    if(namaMahasiswa[i].length > namaTerpanjang.length) {
        namaTerpanjang = namaMahasiswa[i]
    }
    if(namaMahasiswa[i].length < namaTerpendek.length){
        namaTerpendek = namaMahasiswa[i]
    }
}
console.log("Nama yang diawali huruf a: "+namaAwalHurufA)
console.log("Nama paling panjang: " + namaTerpanjang)
console.log("Nama terpendek: " + namaTerpendek)
console.log(" ")

// Buatlah simulasi pengecekan posisi skak (check) antara RAJA dan BENTENG 
let papan = [
  ['.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.']
  ]
let posisiBarisRaja =  4
let posisiKolomRaja = 2
let posisiBarisBenteng = 3
let posisiKolomBenteng = 2


const raja = papan[posisiBarisRaja][posisiKolomRaja] = 'R'
const benteng = papan[posisiBarisBenteng][posisiKolomBenteng] = 'B'
let skak = false
console.log(papan)
for(let i = 0; i < papan.length; i++) {
  if(papan[i][posisiKolomBenteng] === 'R') {
    skak = true
  } else if(papan[posisiBarisBenteng][i] === 'R'){
    skak = true
  }
}

console.log("Raja terkena skak: "+skak)
