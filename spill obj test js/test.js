class enemy{
    constructor(Xpos, Ypos, enemyHP, enemyDamage, enemyexp, enemycolor){
        this.Xpos = Xpos;
        this.Ypos = Ypos;
        this.enemyHP = enemyHP;
        this.enemyDamage = enemyDamage;
        this.enemyexp = enemyexp;
        this.enemycolor = enemycolor;
    }
    presenter(){
        return `${this.Xpos}`
    }
}

const enemyfirst = new enemy(900, 100, 40, 10, 30, "red");

let enemyX = enemyfirst.presenter();

console.log(enemyX);