package com.example.backend.controller;

import com.example.backend.dto.SummarizeRequest;
import com.example.backend.dto.SummarizeResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SummarizeController {

    @PostMapping("/summarize")
    public SummarizeResponse summarize(@RequestBody SummarizeRequest request) {
        String url = request.getUrl();
        
        String summary = "Testing...";

        return new SummarizeResponse(summary);
    }
}