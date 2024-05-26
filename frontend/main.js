import { ProductsService } from "./services/products-service.js"
import { ProductsView } from "./views/products-view.js";

function run(){
    ProductsService.findAll().then((data) => {
        if(data){
            console.log("La page est chargée", data)
            ProductsView.displayProducts();
        }
    }).catch(error => {
        console.log("Bon courage !", error)
    });
}

window.addEventListener("load", run);


