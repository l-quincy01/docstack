package com.octo.docstack.exception;


import com.octo.docstack.dto.error.ErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(ResourceNotFoundException ex, HttpServletRequest request) {
        return new ErrorResponse(
                LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(),
                "Not Found",
                ex.getMessage(),
                request.getRequestURI()
        );
    }

    @ExceptionHandler(ExternalServiceException.class)
    @ResponseStatus(HttpStatus.BAD_GATEWAY)
    public ErrorResponse handleExternal(ExternalServiceException ex, HttpServletRequest request) {
        return new ErrorResponse(
                LocalDateTime.now(),
                HttpStatus.BAD_GATEWAY.value(),
                "External Service Error",
                ex.getMessage(),
                request.getRequestURI()
        );
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGeneric(Exception ex, HttpServletRequest request) {
        return new ErrorResponse(
                LocalDateTime.now(),
                500,
                "Internal Server Error",
                ex.getMessage(),
                request.getRequestURI()
        );
    }
}