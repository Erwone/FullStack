package controllers;

import java.util.ArrayList;

import dao.ProductsDAO;
import models.Product;
import webserver.WebServerContext;

public class ProductsController {

    public static ArrayList<Product> findAll(WebServerContext serverContext){
        ProductsDAO dao = new ProductsDAO();
        //serverContext.getResponse().ok("Tous les produits :");
        serverContext.getResponse().json(dao.findAll());
        return dao.findAll();
    }
}


