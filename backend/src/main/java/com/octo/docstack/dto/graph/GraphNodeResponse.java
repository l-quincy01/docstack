package com.octo.docstack.dto.graph;

import lombok.Builder;

@Builder
public record GraphNodeResponse(
        String id,
        String label,
        String type,
        String fill
) {}