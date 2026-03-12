package com.octo.docstack.dto.graph;

import lombok.Builder;

@Builder
public record GraphEdgeResponse(
        String id,
        String source,
        String target,
        String label,
        Boolean dashed,
        String fill
) {}
