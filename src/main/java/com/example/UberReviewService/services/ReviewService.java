package com.example.UberReviewService.services;

import com.example.UberReviewService.models.Booking;
import com.example.UberReviewService.models.Driver;
import com.example.UberReviewService.models.Review;
import com.example.UberReviewService.repositories.DriverRepository;
import com.example.UberReviewService.repositories.ReviewRepository;
import com.example.UberReviewService.repositories.bookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService implements CommandLineRunner {

    private final ReviewRepository reviewRepository;
    private final bookingRepository BookingRepository;
    private final DriverRepository driverRepository;
//    public ReviewService(ReviewRepository reviewRepository, bookingRepository BookingRepository,DriverRepository driverRepository){
//        this.reviewRepository=reviewRepository;
//        this.BookingRepository=BookingRepository;
//        this.driverRepository=driverRepository;
//
//    }
    @Override
    public void run(String... args) throws Exception {
//        Review r = Review.builder()
//                .content("Amazing")
//                .rating(5.0)
//                .build();
//        Booking b = Booking.builder().review(r).endTime(new Date()).build();
//        BookingRepository.save(b);
//        reviewRepository.save(r);
//        System.out.println("****************");

    List<Driver>drivers= driverRepository.findAll();
    }
}
