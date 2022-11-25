const spiller = document.querySelector("#boks");

let spillerX = 100;
let spillerY = 100;
let spillerHP = 100;
let timehp = 0;
let invisframe = 0;
let woodensword = 10;
let attack = woodensword;
let exp = 0;

/*const enemy = document.querySelector("#eboks");

let enemyX = 900;
let enemyY = 100;
let enemyHP = 100;
*/

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
        return this.Xpos
    }

    opprett() { // Tgner opp fienden i HTML
        this.ytreDiv = document.createElement("div");
        this.ytreDiv.id = "parente";
        this.indreDiv = document.createElement("div");
        this.indreDiv.id = "eboks";
        this.indreDiv.style.backgroundColor = this.enemycolor;
        this.indreDiv.style.width = "100px";
        this.indreDiv.style.height = "100px";
        this.indreDiv.style.position = "absolute";
        this.indreDiv.style.top = this.Ypos + "px";
        this.indreDiv.style.left = this.Xpos + "px";
        this.ytreDiv.appendChild(this.indreDiv);

        document.body.appendChild(this.ytreDiv); // Nå kommer alt "innholdet" inn i HTML
    }

    tegn() {
        this.indreDiv.style.left = this.Xpos + "px";
        this.indreDiv.style.top = this.Ypos + "px";
    }

    endrex(fart){
        this.Xpos += fart;
    }

    endrey(fart){
        this.Ypos += fart; 
        
    }

    removecolor(){
        this.enemycolor = "yellow";
    }

    removedenemy(){
        // alert("Fienden er død, kjører remove...");
        var hpzero = this.enemyHP
        if (hpzero <= 0) {
            this.indreDiv.remove();
        }
        
        // document.body.removeChild(this.ytreDiv); // Nå kommer alt "innholdet" inn i HTML
    }

    colorred(){
        var hpmtz = this.enemyHP
        if (hpmtz > 0) {
            this.enemycolor = "red";
        }
        
    }

}

/*const enemyfirst = new enemy("900", "100", "40", "10", "30", "red")

enemyfirst.opprett();

console.log(enemyfirst.Xpos)*/

const enemys = [
    new enemy(900, 100, 40, 10, 30, "red")
];

enemys.forEach(function(enemy){
    enemy.opprett();
    document.addEventListener("keydown", function(e) {
        console.log(e.key);
        //console.log(typeof e.key);
    
        /*if(e.key==="i") {
            console.log("du trykte på i")
        }*/

        if(e.key==="s") {
            spillerY += 10;
            spiller.style.top = spillerY + "px";
        }
        if(e.key==="w") {
            spillerY -= 10;
            spiller.style.top = spillerY + "px";
        }
        if(e.key==="d"){
            spillerX += 10;
            spiller.style.left = spillerX + "px";
        }
        if(e.key==="a"){
            spillerX -= 10;
            spiller.style.left = spillerX + "px";
        }
        if (e.key==="h") {
            if (spillerHP < 100) {
                if (timehp == 0) {
                    spillerHP = spillerHP + 40;
                    timehp = timehp + 5000;
                    console.log(spillerHP)
                    if (spillerHP >= 100) {
                        spillerHP = spillerHP = 100;
                        console.log(spillerHP)
                    } 
                }
            }else {
                console.log("can not heal")
            }
        }
        if (e.key==="y") {
            if (enemy.Xpos == spillerX) {
                enemy.enemyHP = enemy.enemyHP - attack;
                document.getElementById("damagemsg").innerHTML = "skade gjort er " + attack;
            }
        }
    }
    );


    function loop() {
        if(spillerHP <= 0) {
            spiller.style.visibility = "hidden";
        }
        console.log("Fienden sitt liv er: " + enemy.enemyHP);

        if (enemy.enemycolor == "yellow") {
            if (enemy.enemyHP > 0) {
                enemys.forEach(function(enemy){
                    enemy.colorred();
                });
            } else {
                enemys.forEach(function(enemy){
                    enemy.removedenemy();
                });
            } 
        }

        if (enemy.enemycolor == "red") {
            if (enemy.enemyHP <= 0) {
                // console.log(typeof parentenemy.firstElementChild);
                // console.log(parentenemy.firstElementChild.);
                // parentenemy.removeChild();
                exp = exp + enemy.enemyexp;
                // enemys.shift();
                enemys.forEach(function(enemy){
                    enemy.removecolor();
                });
                if (enemy.enemycolor == "yellow") {
                    enemys.forEach(function(enemy){
                        enemy.removedenemy();
                        
                    });
                    let wave = document.getElementById("nwave");
                    wave.style.visibility = "visible";
                }
            }   
        }
        
        
        if(spillerHP > 0) {
            if (enemy.Xpos > spillerX) {
                enemys.forEach(function(enemy){
                    enemy.endrex(-1);
                    enemy.tegn();
                })
                
                //enemy.style.left = enemy.Xpos + "px";
            } else if(enemy.Xpos < spillerX){
                enemys.forEach(function(enemy){
                    enemy.endrex(1);
                    enemy.tegn();
                })
                //enemy.style.left = enemy.Xpos + "px";
            }
            if (enemy.Ypos > spillerY) {
                enemys.forEach(function(enemy){
                    enemy.endrey(-1);
                    enemy.tegn();
                })
                //enemy.style.top = enemy.Ypos + "px";
            } else if(enemy.Ypos < spillerY){
                enemys.forEach(function(enemy){
                    enemy.endrey(1);
                    enemy.tegn();
                })
                //enemy.style.top = enemy.Ypos + "px";
            }
            /*enemyX -= 10;
            enemy.style.left = enemyX + "px";
            console.log(enemy.style.left);
            console.log("flyter finde")*/
        }
        // if(enemy.Xpos == (spillerX + 100)){
        //     if (invisframe == 0) {
        //         spillerHP = spillerHP - enemy.enemyDamage;
        //         console.log(spillerHP)
        //         spillerX -= 50;
        //         spiller.style.left = spillerX + "px";
        //         invisframe = invisframe + 200;
        //     }
        // }else if(enemy.Xpos == (spillerX - 100)){
        //     if (invisframe == 0) {
        //         spillerHP = spillerHP - enemy.enemyDamage;
        //         console.log(spillerHP)
        //         spillerX += 50;
        //         spiller.style.left = spillerX + "px";
        //         invisframe = invisframe + 200;
        //     }
        // }else if(enemy.Ypos == (spillerY + 100)){
        //     if (invisframe == 0) {
        //         spillerHP = spillerHP - enemy.enemyDamage;
        //         console.log(spillerHP)
        //         spillerY -= 50;
        //         spiller.style.top = spillerY + "px";
        //         invisframe = invisframe + 200;
        //     }
        // }else if(enemy.Ypos == (spillerY - 100)){
        //     if (invisframe == 0) {
        //         spillerHP = spillerHP - enemy.enemyDamage;
        //         console.log(spillerHP)
        //         spillerY += 50;
        //         spiller.style.top = spillerY + "px";
        //         invisframe = invisframe + 200;
        //     }
        // }
        
        
        if(timehp > 0) {
            timehp = timehp - 1;
            console.log(timehp)
        }
        if (invisframe > 0) {
            invisframe = invisframe -1;
        }
        
        
        requestAnimationFrame(loop);
    }
    
    loop();
})

function nesterunde() {
    enemys.push(new enemy(800, 100, 40, 10, 30, "red"));
    enemys.forEach(function(enemy){
        enemy.opprett();
        console.log("oppreter ny fiende")
    })
}
