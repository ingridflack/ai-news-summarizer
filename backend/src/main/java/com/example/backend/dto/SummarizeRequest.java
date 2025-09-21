package com.example.backend.dto;

public class SummarizeRequest {
    private String url;

    public SummarizeRequest() {}

    public SummarizeRequest(String url) {
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
