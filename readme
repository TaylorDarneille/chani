# Chani Full Stack Dev Application
---
## CRUD API Example

### Technologies Used:
* Node (server)
* PostreSQL (database)
* Sequelize (ORM)

### Premise
The idea was to create something relevent to an astrology app. This CRUD app has a single *friend* model. The idea is that the user would want to store birth information about their friends as they learn it.

### Database Model: friend

| Field  | Data Type | Validation |
| ------------- | ------------- |
| Name  | String  | - |
| Year  | Integer  | >=1900 |
| Month  | Integer  | 1-12 |
| Day  | Integer  | 1-31 |
| Hour  | Integer  | 0-12 |
| Minute  | Integer  | 0-59 |
| Meridiem  | Enumeration  | "am", "pm" |
| Location  | String  | - |

##### Note
I chose to use this deconstructed schema instead of combining the date-related fields into a DATE data type field because, from a full-stack development and UX perspective, I can see several possible client-side user flows that would benefit from this structure. Additionally, I have hit some headaches in the past trying to work with the sequelize date-related datatypes since they don't translate directly to the javascript date objects. So, this seemed like a much simpler, and foolproof approach since it is an API that assumes a corresponding front-end user experience.


### Endpoints


### Further Work
* Sequelize validations aren't working as expected (not throwing errors when given values outside of indicated range)
* Needs more robust error handling and documentation