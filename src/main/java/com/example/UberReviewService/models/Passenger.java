package com.example.UberReviewService.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Passenger extends BaseModel{
    private String name;

    @OneToMany(mappedBy = "Passenger")
    private List<Booking> booking = new ArrayList<>();
}
