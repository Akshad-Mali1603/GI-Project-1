package com.example.projectFirst.repository;

import com.example.projectFirst.model.model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface repository extends JpaRepository<model, Integer> {

}
