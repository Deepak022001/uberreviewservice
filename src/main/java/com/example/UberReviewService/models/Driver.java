package com.example.UberReviewService.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;
@Entity
public class Driver extends BaseModel{

    private String name;

    private String licenseNumber;

    @OneToMany(mappedBy = "driver")
    private List<Booking> bookings = new ArrayList<>();
}
//2:52
