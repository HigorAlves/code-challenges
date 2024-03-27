# Serverless TypeScript API Project Structure Documentation

This documentation describes the structure of the `aws-serverless-typescript-api` project. The project is organized into
various directories and files, each serving a specific purpose in the development of a serverless application using AWS
Lambda, TypeScript, and related technologies.

## Project Structure Overview

- **.esbuild** - Contains configuration and scripts related to the ESBuild bundler which is used for building and
  bundling the TypeScript code for production.

- **.github** - Houses the GitHub Actions CI/CD workflows and other GitHub-related configurations.

- **docs** - Documentation files related to the project are stored here, including architecture diagrams, API
  specifications, and markdown documentation.

- **node_modules** - The directory where all the dependencies installed via npm or yarn are located.

- **src** - The source code of the application, structured into subdirectories:
	- **functions** - Contains the individual Lambda function definitions that the serverless framework deploys.
	- **helpers** - Utility functions and shared helpers that can be used across multiple Lambda functions.
	- **libs** - Shared libraries that might contain business logic, data access layers, or third-party service
	  integrations.
	- **modules** - Domain-specific modules that encapsulate the logic related to different aspects of the application:
		- **authentication**:
			- **controllers** - Handlers for authentication-related routes.
			- **models** - Data models specific to authentication.
			- **repositories** - Data access logic for authentication data.
			- **services** - Business logic related to authentication operations.
		- **user**:
			- **controllers** - Handlers for user-related routes and operations.
			- **models** - Data models for user entities.
			- **repositories** - Data access logic for user data.
			- **services** - Business logic for user operations.

- **.eslintignore** - Specifies patterns for files and directories that ESLint should ignore.

- **.eslintrc.js** - Configuration file for ESLint, defining rules and plugins for linting the TypeScript code.

- **.gitignore** - Lists the files and directories that should not be tracked by Git.

- **.nvrmc** - Configuration for Node Version Manager to specify the Node.js version to use.

- **.prettierignore** - Specifies patterns for files and directories that Prettier should ignore.

- **.prettierrc** - Configuration file for Prettier, defining code formatting rules.

- **package.json** - Manifest file for Node.js projects, which includes metadata about the project and lists its
  dependencies.

- **prettier.config.js** - Alternative configuration file for Prettier.

- **serverless.ts** - The main configuration file for the Serverless Framework, defining service properties, plugins,
  providers, functions, and resources.

- **tsconfig.json** - Configuration file for the TypeScript compiler, defining compiler options and project settings.

- **tsconfig.paths.json** - Extends the TypeScript compiler configuration with custom path mappings.

- **yarn.lock** - Automatically generated file by Yarn to lock the versions of installed packages, ensuring consistent
  installs across different machines.

The use of modules along with repositories, controllers, models, and services is a reflection of the Clean Architecture
principles, which aim to create systems that are independent of UI, frameworks, and external agency. This structure
supports maintainability, scalability, and the decoupling of the various components of the application. Here's how this
approach aligns with Clean Architecture and why it's considered a good practice:

### Modules

- **Domain-Centric Design**: Modules are centered around the domain logic, which is the high-level business rules of the
  application. Each module focuses on a particular domain aspect, such as authentication or user management, promoting
  separation of concerns and making the codebase more navigable.

- **Encapsulation**: They encapsulate all the logic pertaining to a specific domain, reducing dependencies and
  interactions with other parts of the system. This encapsulation makes the modules more reusable and easier to
  refactor.

### Repositories

- **Abstraction of Data Sources**: Repositories abstract the details of data persistence, providing a clean separation
  between the application's core logic and the data layer. By doing this, changes to the database have minimal impact on
  the business logic.

- **Single Responsibility Principle**: Each repository is responsible for all data interactions of a single entity type,
  adhering to the Single Responsibility Principle. This makes the data access layer predictable and easier to maintain.

### Controllers

- **Input/Output Boundary**: Controllers act as the input/output boundary of the application. They interpret user input
  from the frontend (e.g., HTTP requests) and map it to actions in the service layer, decoupling the user interface from
  the core logic.

- **Thin Controllers**: Emphasizing thin controllers helps to keep the business logic out of the controller and in the
  service layer, where it can be more easily tested and managed.

### Models

- **Business Entities**: Models represent the business entities and are used to define the structure of data throughout
  the application. These are typically simple data structures without business logic, ensuring they can be used across
  different layers without causing tight coupling.

- **Data Transfer Objects**: Models can also act as Data Transfer Objects (DTOs) to encapsulate data and send it across
  layers or over the network, maintaining a clear contract for data interaction.

### Services

- **Business Logic**: Services contain the business logic of the application, coordinating actions between the
  repositories and the models. They encapsulate the use cases of the application, making them independent of external
  concerns.

- **Interchangeable Logic**: Because services define interfaces, the underlying implementation can be swapped or
  modified without affecting the rest of the application, allowing for flexibility and adaptability.

### Conclusion

Following Clean Architecture by using modules, repositories, controllers, models, and services results in a codebase
that is:

- **Testable**: The business logic can be tested independently of the UI, database, and external integrations.

- **Independent of UI**: The UI can change without changing the rest of the system.

- **Independent of Database**: You can switch databases easily if the situation calls for it.

- **Independent of External Agencies**: The business rules don’t know anything about the outside world, thus they can be
  kept pure and easy to validate.

In summary, organizing code in this manner leads to a more maintainable, scalable, and clean application that adheres to
modern software design principles.
