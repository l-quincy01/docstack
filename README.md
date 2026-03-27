
![Banner](./frontend/screenshots/v0.14/0.png?raw=true)

# Docstack

![Backend](https://img.shields.io/badge/backend-SpringBoot-green)
![Database](https://img.shields.io/badge/database-MongoDB-darkgreen)

# Overview

DocStack is a knowledge workspace application that allows users to organise ideas, write documents, and build connected knowledge inside structured topics.

Instead of scattered notes and disconnected files, DocStack keeps everything in one place. Users can create topics, write rich documents, link content together, and automatically generate knowledge graphs that show how concepts relate to each other.

DocStack removes the friction from managing information. The app handles document storage, autosave, concept extraction, and graph generation automatically, so you can focus on thinking, learning, and building knowledge rather than organising files.

The goal of DocStack is to make personal knowledge feel structured, visual, and easy to navigate, without turning note-taking into a complicated process.



 

# User Interface
### Onboarding Screens

| Welcome | Sign Up |
|--------|--------|
| <img src="./frontend/screenshots/v0.14/0.png" width="85%" /> | <img src="./frontend/screenshots/v0.14/0a.png" width="85%" /> |


<!-- | Sign Up (Email OTP) | Login |
|-------------------|-------|
| <img src="./frontend/screenshots/v0.14/0b.png" width="85%" /> | <img src="./screenshots/1b.png" width="85%" /> | -->

| Dashboard | Editor() |
|--------|--------|
| <img src="./frontend/screenshots/v0.14/2.png" width="85%" /> | <img src="./frontend/screenshots/v0.14/1.png" width="85%" /> |

| Graph view | Editor() |
|--------|--------|
| <img src="./frontend/screenshots/v0.14/3.png" width="85%" /> | <img src="./frontend/screenshots/v0.14/6.png" width="85%" /> |

| Editor() | Editor() |
|--------|--------|
| <img src="./frontend/screenshots/v0.14/5.png" width="85%" /> | <img src="./frontend/screenshots/v0.14/4.png" width="85%" /> |



# Backend Architecture 

DocStack is a knowledge workspace application that allows users to create topics, write documents and build knowledge graphs (create connections between documents).  

The system uses a Spring Boot backend, MongoDB storage, Clerk authentication and AI for concept distillation.

<!-- The backend is responsible for:

- User-scoped data access
- Topic & document management
- Knowledge graph generation
- Concept distillation  -->

---

## Tech Stack

| Layer | Technology |
|--------|------------|
| Backend | Java, Spring Boot |
| Database | MongoDB |
| Auth | Clerk JWT |
| Storage | Cloudflare R2 |
| AI | OpenAI API |
| Build | Maven |
| Container | Docker / Docker Compose |

---

## Backend Folder Structure

```
docstack-backend
├── docker-compose.yml
├── pom.xml
├── src/main/java/com/octo/docstack
│
├── common
│   └── CurrentUserService
│
├── config
│   ├── SecurityConfig
│   ├── MongoConfig
│   ├── R2Config
│   ├── AiConfig
│   ├── HttpClientConfig
│   └── AsyncConfig
│
├── controller
│   ├── document
│   ├── topic
│   ├── graph
│   └── profile
│
├── dto
│   ├── document
│   ├── topic
│   ├── graph
│   ├── profile
│   └── ai
│
├── models
│   ├── document
│   ├── topic
│   ├── graph
│   └── profile
│
├── repository
│   ├── document
│   ├── topic
│   ├── graph
│   └── profile
│
├── service
│   ├── document
│   ├── topic
│   ├── graph
│   ├── profile
│   └── ai
│
└── listeners
    └── DocumentGraphEventListener
```

---

## Authentication & Authorization

Clerk handles authentication.  
The frontend sends a JWT to the backend, and Spring Security validates it.

Each request is scoped to the current user.

```mermaid
flowchart LR
    FE[Frontend] -->|JWT| API[Spring Boot API]
    API --> Clerk[[Clerk JWKS]]
    API --> Mongo[(MongoDB)]
    API --> R2[(Cloudflare R2)]
```

---

## Sign In Flow

```mermaid
sequenceDiagram
    actor Client
    participant Clerk
    participant Springboot
    participant Mongo

    Client ->> Clerk: Sign in (OTP / email)
    Clerk -->> Client: Session + JWT

    Client ->> Springboot: Request with JWT
    Springboot ->> Clerk: Validate token
    Springboot ->> Mongo: Load user data
    Springboot -->> Client: Response
```

---

## Topic & Document Flow

Users create topics → create documents → edit content → autosave → graph sync

```mermaid
sequenceDiagram
    participant FE as Frontend
    participant Springboot
    participant Mongo
    participant Graph
    participant AI

    FE->>Springboot: Create topic
    Springboot->>Mongo: Save topic

    FE->>Springboot: Create document
    Springboot->>Mongo: Save document

    FE->>Springboot: Update content
    Springboot->>Mongo: Save content

    Springboot->>Graph: Publish DocumentSavedEvent
    Graph->>AI: Distill concepts
    AI-->>Graph: Return concepts
    Graph-->>Graph: Create links
    Graph->>Mongo: Update nodes & edges
```

---

## Knowledge Graph Architecture

Each topic has its own graph.

Nodes:
- DOCUMENT
- CONCEPT

Edges:
- LINKS_TO
- MENTIONS



Graph is rebuilt when a document is saved.

---

<!-- ## Document Save → Graph Sync

Document save triggers an event.

```
DocumentService
   ↓
DocumentSavedEvent
   ↓
DocumentGraphEventListener
   ↓
DocumentGraphSyncService
   ↓
ConceptExtractionService (OpenAI)
   ↓
GraphService
```

--- -->

## Thumbnail Upload Flow

Thumbnails are stored in Cloudflare R2 using presigned URLs.

```mermaid
sequenceDiagram
    Frontend->>API: request presign
    API->>R2: generate URL
    API-->>FE: presigned URL

    Frontend->>R2: PUT image
    FE->>API: save thumbnail URL
    API->>Mongo: update document
```

<!-- ---

## AI Concept Extraction

Concepts are extracted from document text.

```
Plate JSON → Text Extractor
Text → LLM 
LLM → Concepts
Concepts → Graph nodes
```

Services involved:

- `PlateTextExtractor`
- `ConceptExtractionService`
- `LlmGateway`
- `GraphService` -->

---

## Data Flow

```mermaid
flowchart LR

FE[Frontend]
API[Spring Boot]
MONGO[(MongoDB)]
R2[(Cloudflare R2)]
OPENAI[[OpenAI API]]

FE --> API
API --> MONGO
API --> R2
API --> OPENAI
```

---



## Future Improvements

- Vector search
- Graph queries
- Full-text search
- Realtime collaboration
- Canvas
- Richer editor
 


