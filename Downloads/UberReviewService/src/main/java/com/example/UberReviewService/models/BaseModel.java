package com.example.UberReviewService.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;
@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public abstract class BaseModel  {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY) //AUTOINCREMENT
    protected Long id;

    @Column(nullable = false,updatable = false)
    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    protected Date createdAt;

    @Column(nullable = false ,updatable = false)
    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    protected Date updatedAt;
}
