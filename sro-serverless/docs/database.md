### MongoDB Data Model Design for Serverless AWS Environment

#### Introduction

Our MongoDB data model to be deployed within a serverless AWS environment, utilizing MongoDB Atlas.
This updated documentation elaborates on the schema, with additional insights into sharding and a summary of the
optimized schema.

#### Data Model Overview

The backbone of our application is a sophisticated user management system.
This system is designed to efficiently handle signup, login, and token validation processes.
MongoDB was chosen for its scalability, flexibility, and seamless integration with serverless architectures.

#### Schema Design

The core of our design is the `User` collection. This collection is augmented by embedded documents,
specifically for `tokens` and `loginAttempts`, to streamline operations and enhance performance.

**User Collection Schema:**

- **_id**: MongoDB's default identifier.
- **email**: Unique and indexed to facilitate efficient searches.
- **password**: Securely stored using hashing.
- **name**: User's full name.
- **dob**: Optional date of birth.
- **role**: Defines user privileges.
- **tokens**: An array of embedded documents for managing session tokens.
- **loginAttempts**: An embedded document that tracks failed login attempts.

The tokens schema is used to manage authentication tokens for users, including the token value, its creation date,
and whether it has expired. This allows for efficient token validation and management within user sessions.

```json
"tokens": [
{
"token": "String", // The JWT token for user authentication
"createdAt": "Date", // The timestamp when the token was created
"expired": "Boolean" // Whether the token is expired or not
}
]
```

The loginAttempts schema tracks the number of failed login attempts and the timestamp of the last failed attempt.
This information can be used to implement security measures such as locking the user account after a certain number of
failed attempts.

```json
"loginAttempts": {
"attemptCount": "Number", // The number of consecutive failed login attempts
"lastAttempt": "Date" // The timestamp of the last failed login attempt
}
```

#### Sharding Strategy

In a scalable serverless environment like AWS, sharding plays a pivotal role in distributing data across multiple
servers,
ensuring balanced load and high availability.

- **Shard Key Selection**: The `email` field is chosen as the shard key due to its uniqueness and frequent use in
  queries.
  This choice ensures an even distribution of data and efficient query routing.
- **Considerations for Sharding**: When designing the schema, we considered the implications of sharding on data access
  patterns.
  The embedded documents for tokens and login attempts are particularly advantageous,
- as they keep related data together within the same shard, minimizing cross-shard queries that can impact performance.

#### Optimized Schema Summary

- **Embedded Documents**: By embedding `tokens` and `loginAttempts` directly within the `User` document, we reduce the
  need for separate collections.
  This design choice is crucial for minimizing latency and resource consumption in serverless functions, where
  performance is directly tied to cost.
- **Indexing**: Strategic use of indexes on frequently queried fields like `email` and `tokens.token` ensures
  high query performance, essential for serverless architectures where efficiency is paramount.
- **Sharding**: The thoughtful selection of a shard key and the consideration of sharding implications during schema
  design ensure our data model is primed for scalability and performance in a distributed environment.

#### Considerations

- **Security**: Ensure the secure handling of JWT tokens to prevent unauthorized access. Tokens should be invalidated
  upon user logout or expiration.
- **Scalabilit**y: These schemas are designed to be embedded within the User document for performance and scalability.
  However, consider the document size limit in MongoDB and the potential growth of the tokens array.
- **Indexing**: For optimal performance, especially in large datasets, indexing fields that are frequently queried, such
  as email in the User collection or token in the tokens array.
