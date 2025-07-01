package com.example.projectFirst.services;

import com.example.projectFirst.model.model;

import java.util.List;


public interface service {

    public void add(model book);
    public List<model> display();
    public void delete(Integer id);
    public void updateStudent(model book, Integer id);
}
