package com.example.UberReviewService.services;

import com.example.UberReviewService.models.Booking;
import com.example.UberReviewService.models.Review;
import com.example.UberReviewService.repositories.ReviewRepository;
import com.example.UberReviewService.repositories.bookingRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ReviewService implements CommandLineRunner {

    private final ReviewRepository reviewRepository;
    private final bookingRepository BookingRepository;
    public ReviewService(ReviewRepository reviewRepository, bookingRepository BookingRepository){
        this.reviewRepository=reviewRepository;
        this.BookingRepository=BookingRepository;

    }
    @Override
    public void run(String... args) throws Exception {
        Review r = Review.builder()
                .content("Amazing")
                .rating(5.0)
                .build();
        Booking b = Booking.builder().review(r).endTime(new Date()).build();
        BookingRepository.save(b);
        reviewRepository.save(r);
        System.out.println("****************");

    }
}
