    package com.octo.docstack.models.topic;

    import lombok.Getter;
    import lombok.Setter;
    import org.springframework.data.annotation.Id;
    import org.springframework.data.annotation.CreatedDate;
    import org.springframework.data.annotation.LastModifiedDate;
    import org.springframework.data.mongodb.core.index.CompoundIndex;
    import org.springframework.data.mongodb.core.mapping.Document;

    import java.time.Instant;

    @Getter
    @Setter

    @Document(collection = "topics")
    @CompoundIndex(name = "user_title_unique_idx", def = "{'userId': 1, 'title': 1}", unique = true)
    public class Topic {

        @Id
        private String id;

        private String userId;

        private String title;

        @CreatedDate
        private Instant createdAt;

        @LastModifiedDate
        private Instant updatedAt;

        public Topic() {}

        public Topic(String userId, String title) {
            this.userId = userId;
            this.title = title;
        }


    }