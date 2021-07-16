const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Charge{
    constructor(q,m,x,y,v,B){
        this.q = q;
        this.m = m;
        this.x = x;
        this.y = y;
        this.v = v;
        this.B = B;
        this.t = 0;

        if(B==0){
            this.r = 0;
        }else{
            //this.r = (m*v)/(q*B);
            this.r = 100;
        }
        
        this.ac = (q*v*B)/m;  //centripetal acceleration
        this.w = (q*B)/m;   //angular velocity
    }

    // w (){
    //     return this.v / this.r;
    // }

    // ax () { 
    //     return this.a * Math.sin(this.w() * this.t)
    // }
    // ay () { 
    //     return this.a * Math.cos(this.w() * this.t)
    // }
    update(){
        this.t += 1;
        this.x += this.r*Math.sin(this.w * this.t);
        this.y += this.r*Math.cos(this.w * this.t);
    }

    draw() {
        ctx.fillStyle="white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2 )
        ctx.closePath();
        ctx.stroke();
    }

}

const charge = new Charge(20,2,100,300,25,2);

function animate(){
    ctx.fillStyle= 'rgba(255,255,255,0.8)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    charge.update();
    charge.draw();
    requestAnimationFrame(animate);
}

animate();





