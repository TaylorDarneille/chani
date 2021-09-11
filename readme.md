# Chani Full Stack Dev Application
---
## CRUD API Example

### Technologies Used:
* Node (server)
* PostreSQL (database)
* Sequelize (ORM)

### Premise
Theoretical astrology (not social) app with a friend model so the user can store birth chart information about people they know.

### Database Model: friend

| Field         | Data Type     | Validation |
| ------------- | ------------- | ------------- |
| Name          | String        | - |
| Year  | Integer  | >=1900 |
| Month  | Integer  | 1-12 |
| Day  | Integer  | 1-31 |
| Hour  | Integer  | 0-12 |
| Minute  | Integer  | 0-59 |
| Meridiem  | Enumeration  | "am", "pm" |
| Location  | String  | - |

##### Note
I used this deconstructed schema instead of combining the date-related fields into a DATE data type field because, from a full-stack development and UX perspective, there are several possible client-side user flows that would benefit from this structure. Additionally, some headaches can arise when working with the sequelize date-related datatypes since they don't translate directly to the javascript date objects.


### Endpoints

| Route | Endpoint |
| ------------- | ------------- |
| Base | https://chani-app.herokuapp.com |
| Index  | /friend  |
| Create  | /friend  |
| Update  | /friend/:id  |
| Delete  | /friend/:id  |


### Further Work
* Needs more robust error handling and documentation
