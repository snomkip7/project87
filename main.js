var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update(){
    fabric.Image.fromURL("spiderman.png", function(Img){
        player_object = Img;

        player_object.scaletoWidth(150);
        player_object.scaletoHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    //base figure
    if(keyPressed == '72'){
        console.log("h");
        new_image('captain_america_left_hand.png');
    }
    if(keyPressed == '70'){
        console.log("f");
        new_image('ironman_face.png');
    }
    if(keyPressed == '76'){
        console.log("l");
        new_image('hulk_legs.png');
    }
    if(keyPressed == '82'){
        console.log("r");
        new_image('thor_right_hand.png');
    }
    if(keyPressed == '66'){
        console.log("b");
        new_image('spiderman_body.png');
    }

    //up donw left right
    if(keyPressed == '38'){
        console.log("up");
        up();
    }
    if(keyPressed == '38'){
        console.log("down");
        down();
    }
    if(keyPressed == '38'){
        console.log("left");
        left();
    }
    if(keyPressed == '38'){
        console.log("right");
        right();
    }
    
}