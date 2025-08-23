package com.example.UberReviewService.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.boot.autoconfigure.web.WebProperties;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Builder
@Table(name="booking_Review")
@Inheritance(strategy = InheritanceType.JOINED)
public class Review extends BaseModel {

    @Column(nullable = false)
    private String content;

    private Double rating;

    @Override
    public String toString() {
        return "Review: " + this.content + " " + this.rating + " " + this.getCreatedAt();
    }
}