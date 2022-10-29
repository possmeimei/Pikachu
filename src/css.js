const string = `
        .Pikachu *{box-sizing: border-box;margin: 0;padding: 0;}
.Pikachu *::before,.Pikachu *::after{box-sizing: border-box}

.Pikachu{
    background: #FFE600;
    min-height: 100vh;
    position: relative;
}
.triangle{
    border: 8px solid;
    border-bottom: none;
    border-color: black transparent transparent;
    width: 0;
    height: 0;
    position: relative;
    left: 50%;
    top: 200px;
    margin-left: -8px;
    z-index: 2;
}
@keyframes wave {
    0%{transform: rotate(0deg)}
    33%{transform: rotate(6deg)}
    66%{transform: rotate(-6deg)}
    100%{transform: rotate(0deg)}
}
.triangle:hover{
    transform-origin: 50% 100%;
    animation: wave 200ms infinite;
}
.circular{
    border: 1px solid black;
    width: 16px;
    height: 6px;
    position: absolute;
    left: -8px;
    top:-14px;
    border-radius: 14px 14px 0 0;
    background: black;
}
.eyes{
    border: 2px solid black;
    border-radius: 50%;
    background:#2e2e2e ;
    width: 40px;
    height: 40px;
    top: 170px;
    position: absolute;
    left: 50%;
    margin-left: -20px;
}
.eyes:after{
    content: '';
    display: block;
    border: 2px solid black;
    background: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 2px;
    top: -1px;
}
.eyes.left{
    transform: translateX(-80px);
}
.eyes.right{
    transform: translateX(80px);
}
.mouth{
    /*border: 1px solid black;*/
    width: 160px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 225px;
    margin-left: -80px;
}
.up{
    position: relative;
    top: -16px;
    z-index: 1;
}
.up .lip{
    background: #FFE600;
}
.up .lip.left{
    border: 4px solid black;
    width: 70px;
    height: 30px;
    position: absolute;
    border-radius: 0 0 0 50px;
    border-top-color: transparent;
    transform: rotate(-20deg);
    left: 50%;
    margin-left: -72px;
}
.up .lip.left:before{
    content: '';
    display: block;
    width: 6px;
    height: 30px;
    position: absolute;
    left: 61px;
    top: -8px;
    background: #FFE600;
}
.up .lip.left:after{
    content: '';
    display: block;
    width: 80px;
    height: 6px;
    position: absolute;
    left: 0;
    top: -8px;
    background: #FFE600;
}
.up .lip.right{
    border: 4px solid black;
    width: 70px;
    height: 30px;
    position: absolute;
    border-radius: 0 0 50px 0;
    border-top-color: transparent;
    transform: rotate(20deg);
    left: 50%;
    margin-left: 1px;
}
.up .lip.right:before{
    content: '';
    display: block;
    width: 6px;
    height: 30px;
    position: absolute;
    right: 61px;
    top: -8px;
    background: #FFE600;
}
.up .lip.right:after{
    content: '';
    display: block;
    width: 80px;
    height: 6px;
    position: absolute;
    right: 0;
    top: -8px;
    background: #FFE600;
}
.down{
    position: absolute;
    width: 140px;
    height: 140px;
    left: 50%;
    margin-left: -70px;
    overflow: hidden;
}
.down .oval-1{
    border: 4px solid black;
    width: 100%;
    height: 900px;
    position: absolute;
    bottom: 0;
    border-radius: 75px/340px;
    background: #9b000a;
    overflow: hidden;
}
.down .oval-1:before {
    content: '';
    display: block;
    width: 100px;
    height: 300px;
    position: absolute;
    bottom: -190px;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px/35px;
    background: #ff485f;
}
.cheek{
    border: 3px solid black;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: red;
    position: absolute;
    left: 50%;
    top: 250px;
    margin-left: -30px;
}
.cheek.left{
    transform: translateX(-125px);
}
.cheek.right{
    transform: translateX(125px);
}
`
export default string