/**
 * Created by mk-sfdev on 11/17/15.
 */

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

$(document).ready(function() {
    var PI = Math.PI;
    var a_canvas = $("#a_canvas")[0],
        ctx = a_canvas.getContext("2d");

    a_canvas.width = 320;
    a_canvas.height = 240;

    ctx.fillStyle = "rgb(155,0,155)";
    ctx.fillRect(0, 0, 500, 500);

// BG - #0C4477
// blue - #1082CE
// white - #F1FEFD

    var source = new Image();
    source.src = 'files/patternSample.jpg';
    ctx.drawImage(source,0,-1);

    var hexMatrix = [],
        blueImgData = [],
        whiteImgData = [],
        row = 0;

    var p = ctx.getImageData(5, 27, 5, 4).data;
    for(var i = 0;i<= 400; i+=4){
        whiteImgData.push(p[i]);
        whiteImgData.push(p[i+1]);
        whiteImgData.push(p[i+2]);
        whiteImgData.push(255);
    }

    //5x4 - block size;

    p = ctx.getImageData(0, 0, 5, 4).data;
    for(var i = 0;i<= 400; i+=4){
        blueImgData.push(p[i]);
        blueImgData.push(p[i+1]);
        blueImgData.push(p[i+2]);
        blueImgData.push(255);
    }

    var newImg = ctx.createImageData(5,4);
    var newImg2 = ctx.createImageData(5,4);

    //ctx.fillStyle = "rgb(200,200,200)";
    //ctx.fillRect(50, 50, 50, 50);
    for(var i = 0; i < 400; i++){
        newImg.data[i] = blueImgData[i];
    }
    for(var i = 0; i < 400; i++){
        newImg2.data[i] = whiteImgData[i];
    }

    var arrImage = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0]
    ];

    var arrImage = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
    ];

    for(var _y = 0; _y < arrImage.length; _y++){
        for(var k = 0; k < arrImage[_y].length; k++){
            ctx.putImageData( (arrImage[_y][k] ? newImg : newImg2), k*5 + 73, _y * 4 + 74 );
        }
    }




});
