import controllers.ProductsController;
import dao.ProductsDAO;
import database.PolyBayDatabase;
import webserver.WebServer;
import webserver.WebServerContext;

public class App {
    public static void main(String[] args) throws Exception {
        
        //PolyBayDatabase data = new PolyBayDatabase();
        
        /* Test ProductsDAO findAll() */
        ProductsDAO dao = new ProductsDAO();
        System.out.println(dao.findAll());

        WebServer webserver = new WebServer();
        webserver.listen(8080);

        webserver.getRouter().get("/products", (WebServerContext context) -> { ProductsController.findAll(context); });
        
    }
}

