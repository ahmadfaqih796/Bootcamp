class Hero {
    #nama;
    constructor(nama) {
        this.#nama = nama;
        this.jenis = "";
        this.skin = "";
        this.blood = 0;
        this.damage = 0;
        this.speed = 0
    }

    set nama(nama) {
        this.#nama = nama;
    }

    get nama() {
        return this.#nama;
    }
}

class Player extends Hero {
    move(direction) {
        let pindah = "pindah"

    }
    attack(enemy) {
        let status = "attack"
        let winner = ""

        if (enemy.blood - this.damage > 0) {
            enemy.blood = enemy.blood - this.damage
        } else {
            enemy.blood = 0;
            winner = this.nama
        }

        return {
            "status": status,
            "attack_from": this.nama,
            "damage": this.damage,
            "received_by": enemy.nama,
            "current_blood": enemy.blood,
            "winner": winner
        }
        // cek apakah blood enemy saat ini masih memungkinakn 
        // untuk dikurangi dengan damage player?
        // kalo iya.. yaudah:
        // enemny blood akan dikurangi dengan jumlah
        // damage-nya si player
        // kalo kaga.. maka:
        // enemy kalah!
    }
    attacked(enemy) {
        let status = "attacked"
        let winner = ""

        if (enemy.blood - this.damage > 0) {
            enemy.blood = enemy.blood - this.damage
        } else {
            enemy.blood = 0;
            winner = this.nama
        }

        return {
            "status": status,
            "attacked_from": this.nama,
            "damage": this.damage,
            "received_by": enemy.nama,
            "current_blood": enemy.blood,
            "winner": winner
        }
        // cek apakah blood player saat ini masih memungkinkan
        // untuk dikurangi dengan damage-nya?
        // kalo iya.. maka:
        // blood player akan dikurangi dengan jumlah
        // damage-nya si enemy
        // kalau tidak.. maka:
        // player kalah!
    }
}

const wanwan = new Player("wanwan")
wanwan.jenis = "marksman"
wanwan.skin = "pink"
wanwan.blood = 100;
wanwan.damage = 60;
wanwan.speed = 90;


const ling = new Player("ling")
ling.jenis = "assasin"
ling.skin = "blue"
ling.blood = 100;
ling.damage = 75;
ling.speed = 90;


let attackResult = wanwan.attack(ling)
console.table(attackResult);