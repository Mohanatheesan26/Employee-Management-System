package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Employee {
    @Id
    private long id;
    private String first_name;
    private String last_name;
    private String email_Id;

    public Employee(){

    }

    public Employee(String firstname, String lastname, String emailId) {
        this.first_name = firstname;
        this.last_name = lastname;
        this.email_Id = emailId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail_Id() {
        return email_Id;
    }

    public void setEmail_Id(String email_Id) {
        this.email_Id = email_Id;
    }
}
