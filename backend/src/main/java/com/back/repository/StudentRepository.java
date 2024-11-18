package com.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
