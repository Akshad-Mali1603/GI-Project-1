package com.example.projectFirst.controller;


import com.example.projectFirst.model.model;
import com.example.projectFirst.services.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class controller {

    @Autowired
    service serv;

    @GetMapping("/display")
    public List<model> display(){
        return serv.display();
    }

    @PostMapping("/add")
    public void add(@RequestBody model book){
        serv.add(book);
    }

}
