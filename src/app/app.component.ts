import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  cart;
  
    constructor() { }
  
    ngOnInit() {
      // this.cart$ = await this.shoppingCartService.getCart();
      this.cart = [
          {id :1,quantity:0,imageUrl:'https://rukminim1.flixcart.com/image/704/704/j30gvbk0-1/shoe-rack/y/g/g/psr204-peng-essentials-original-imaeu8mjrh5ewbcg.jpeg?q=70',title:'Peng Essentials Basix Steel Wall Shelf',totalPrice:150},
          {id:2,quantity:0,imageUrl:'https://rukminim1.flixcart.com/image/704/704/j9rdq4w0/rack-shelf/g/k/n/pbs001-peng-essentials-original-imaezemzzwgzph8y.jpeg?q=70',title:'Peng Essentials Basix Steel Wall Shelf',totalPrice:220},
          {id:3,quantity:0,imageUrl:'https://rukminim1.flixcart.com/image/704/704/j5o7de80-1/kitchen-rack/k/r/n/12-megnetic-knif-alpyog-original-imaev82fffgztgzb.jpeg?q=70',title:'Peng Essentials Basix Steel Wall Shelf',totalPrice :400}
        ]
      
    }
    removeFromCart(item)
    
      {
        for (let i= 0;i<this.cart.length;i++){
          if (item.id == this.cart[i].id){
            if(item.quantity == 0)
            {
              item.totalPrice = 0
            }
            else{
              item.quantity -= 1
  
            }
            
            
          }
          
        }
        this.cart.pop(item);
        console.log(this.cart);
      }
      addToCart(id)
    
      {
        for (let i= 0;i<this.cart.length;i++){
          if (id == this.cart[i].id){
            
            
            this.cart[i].quantity += 1;
  
            
            
            
          }
          
        }
        console.log(this.cart);
      }
  
  
  //   clearCart() { 
  //     this.shoppingCartService.clearCart();
  //   }
  }

