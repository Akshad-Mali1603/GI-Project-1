package com.example.projectFirst.services;

import com.example.projectFirst.model.model;
import com.example.projectFirst.repository.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
public class serviceImpl implements service{

    @Autowired
     repository repo;

    @Override
    public void add(model book) {
        repo.save(book);
    }

    @Override
    public List<model> display() {
        return repo.findAll();
    }

    @Override
    public void delete(Integer id) {

    }

    @Override
    public void updateStudent(model book, Integer id) {

    }


}
