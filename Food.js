class Food {
 
    constructor(){
        var foodStock;
        var lastFed;
    }
 
    preload() {
        milk = loadImage("images/Milk.png");
   }

   getFoodStock(){}

   updateFoodStock(){}

   deductFood(){}

   display(){
       var x=80, y=100;

       imageMode(CENTER);
       image(this.image,720,220,70,70);

       if(this.foodStock!=0){
           for(var i = 0; i<this.foodStock;i++){
               if(i%10==0){
                   x=80;
                   y=y+50;
               }
               image(this.image, x, y, 50, 50);
               x = x + 30;
           }
       }

       readState = database.ref('gameState');
       readState.on("value", function(data){
           gameState = data.val();
       })

       if(gameState!="Hungry"){
           feed.hide();  
           addFood.hide();
           dog.remove();     
        }else{
            feed.show();
            addFood.show();
            dog.addImage(sadDog);
        }
   }

 }
