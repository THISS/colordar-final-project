# Routes (so we know where we are going)
## Base Route
`GET - /` Will display the master calendar page or the register page if not logged in (think facebook)
-----
### Users
- `GET - /users` - Redirects to login if not logged in otherwise redirects to baseRoute
- `PUT - /users` - Submits the register user details and on success renders the baseRoute
- `GET - /users/:id` - Renders the users profile page
- `PUT - /users/:id` - Submits the changes to the users profile and on success renders the updated users profile page
- `GET - /users/register` - Renders the register user form view
- `GET - /users/login` - Renders the login user form view
- `PUT - /users/login` - Submits the login user form and on success redirects to baseRoute
- `PUT - /users/logout` - Submits the users id and changes the servers state in a non destructive way
### Calendars
- `GET - /calendars` - Renders the calendars that the current user owns and is grouped with
- `PUT - /calendars` - Submits a new calendar and redirects to `/calendars/:id`
- `GET - /calendars/:id` - Renders the `calendars/:id` where `:id` is the **_calendars_ id**
- `PUT - /calendars/:id` - Submits updates to the calendar where `:id` is the calendars id and then redirects to `GET - /calendars/:id`
### Groups
- `GET - /groups` - Renders the groups that the user belongs to
- `PUT - /groups` - Submits a new group and redirects to `/groups/:id`
- `GET - /groups/:id` - Renders the group and its associated calendars where `:id` is the **_groups_ id** that the user belongs to
- `PUT - /groups/:id` - Renders the groups that the user belongs to
### Events
- `GET - /events` - Returns the data containing all events for the associated calendar
  - if the calendar is the master calendar then it returns all of the events where the **_users_ id** and **merged** is `true`
- `PUT - /events` - Submits the event data to create a new event
- `GET - /events/:id` - Returns the data of a specific event
- `PUT - /events/:id` - Submits the data of a specific event and updates the event 
