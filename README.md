# CloudTalk Testing Assignment

This is a monorepo (used for simplicity) with 2 services, 2 databases and stream processing platform. For the real project i would consider multi-repos for each separate service.

## Start The application in Development Mode
- Clone the Application `git clone git@github.com:ARTfun00/cloudtalk-testing-assignment.git`
- Install the dependencies `npm install`
- Start the application `npm run dev`

## Monorepo Structure

| Name                         | Description                                                 |
| ---------------------------- | ----------------------------------------------------------- |
| **products-service/**                     | Provides RESTful APIs for managing products and reviews efficiently                         |
| **review-processing-service/**                    | Concurrently processes events to update average product ratings |
| **specs/** | Test task specification     |

## Service Structure (unified for now, should be different for the services appropriately)

| Name                         | Description                                                 |
| ---------------------------- | ----------------------------------------------------------- |
| **<service>/wiki/**                    | You can add project documentation and insructions file here |
| **<service>/src/**                     | Source files                                                |
| **<service>/src/abstractions**         | Abstarct classes and Interfaces                             |
| **<service>/src/components**           | REST API Components & Controllers                           |
| **<service>/src/lib**                  | Reusable utilises and library source code like a logger     |
| **<service>/src/middleware/**          | Express Middlewares like error handler feature              |
| **<service>/build/**                   | Compiled source files will be placed here                   |
| **<service>/tests/**                   | Test cases will be placed here                              |
| **<service>/tests/helpers/**           | Helpers for test cases will be placed here                  |
| **<service>/tests/unit-tests/**        | Unit Test cases will be placed here                         |
| **<service>/tests/integration-tests/** | API routes (Integration) Test cases will be placed here     |

## Workflow

## Notes / comments
