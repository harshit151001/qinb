const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

const charge = {
    size: 1,
    q: 1,
    m: 2,
     
   
    x : 0,
    y : 100,

    v: 25,
    a:  5,
    r: 25,
    w (){
        return this.v / this.r;
    },

    t: 0,
    
    vx: 25,
    vy: 0,

    ax () { 
        return this.a * Math.sin(this.w() * this.t)
    },
    ay () { 
        return this.a * Math.cos(this.w() * this.t)
    },
    
    update(){
        console.log(this);

        this.t = this.t + 1;

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        this.vx = this.vx + this.ax();
        this.vy = this.vy + this.ay();
    },

    draw() {
        ctx.fillStyle="black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2 )
        ctx.closePath();
        ctx.fill();
    }

}

function animate(){
    charge.draw();
    charge.update();
    if (charge.x< 400 && charge.x > 0){
    requestAnimationFrame(animate)
}
}

animate();





