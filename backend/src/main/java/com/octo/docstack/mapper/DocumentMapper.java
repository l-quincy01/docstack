package com.octo.docstack.mapper;


import com.octo.docstack.dto.document.DocumentCardResponse;
import com.octo.docstack.dto.document.DocumentResponse;
import com.octo.docstack.entities.DocItem;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

@Component
public class DocumentMapper {

    private static final DateTimeFormatter CARD_DATE =
            DateTimeFormatter.ofPattern("MMM d, yyyy", Locale.ENGLISH)
                    .withZone(ZoneId.of("Africa/Johannesburg"));

    public DocumentResponse toResponse(DocItem doc) {
        return new DocumentResponse(
                doc.getId(),
                doc.getTopicId(),
                doc.getTitle(),
                doc.getContent(),
                doc.getStatus(),
                doc.getCreatedAt(),
                doc.getUpdatedAt()
        );
    }

    public DocumentCardResponse toCardResponse(DocItem doc) {
        return new DocumentCardResponse(
                doc.getId(),
                doc.getTopicId(),
                doc.getTitle(),
                formatCardDate(doc.getCreatedAt()),
                formatCardDate(doc.getUpdatedAt())
        );
    }

    private String formatCardDate(Instant instant) {
        if (instant == null) return "";
        return CARD_DATE.format(instant);
    }
}
