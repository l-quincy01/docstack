package com.octo.docstack.mapper;


import com.octo.docstack.dto.document.DocumentCardResponse;
import com.octo.docstack.dto.document.DocumentResponse;
import com.octo.docstack.entities.document.DocItem;
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

    public DocumentResponse toDocumentResponse(DocItem doc) {
        return new DocumentResponse(
                doc.getId(),
                doc.getTopicId(),
                doc.getTopicTitle(),
                doc.getTitle(),
                doc.getContent(),
                doc.getStatus(),
                doc.getCreatedAt(),
                doc.getUpdatedAt(),
                doc.getThumbnailUrl()

        );
    }

    public DocumentCardResponse toCardResponse(DocItem doc) {
        return new DocumentCardResponse(
                doc.getId(),
                doc.getTopicId(),
                doc.getTopicTitle(),
                doc.getTitle(),
                doc.getContent(),
                formatCardDate(doc.getCreatedAt()),
                formatCardDate(doc.getUpdatedAt()),
                doc.getThumbnailUrl()
        );
    }

    private String formatCardDate(Instant instant) {
        if (instant == null) return "";
        return CARD_DATE.format(instant);
    }
}
