package com.example.UberReviewService.repositories;

import com.example.UberReviewService.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface bookingRepository extends JpaRepository<Booking,Long> {

}
