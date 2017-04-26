# Routes (so we know where we are going)
## *A session is started on first contact to the site - whether we have them logged in or not
## Base Route
`GET - /` Will display the _master calendar_ page or the register page if not logged in (think facebook)
 - `GET - /users/register` - if not loggedin
 - `GET - /calendars/master` - if is loggedin
 ```
 request: no data in body

 response: {loggedin: boolean}
 ```
-----
### Users
- `GET - /users` - Redirects to `/users/login` if not logged in otherwise redirects to `baseRoute`
```
request: no data in body

response: {loggedin: boolean}
```
- `POST/PUT - /users` - Submits the register user details and on success redirect to the `baseRoute`, on fail will redirect to `/users/register` with errors passed
 - server will set userid in session
```
request: {first_name: 'String', email: 'String of email', password: 'not the word password', password_confirmation: 'not the word password'}
```
- `GET - /users/profile` - Renders the users profile page using the uuid that is stored in their session
```
request: no data in body

response: 
{first_name: 'String', image_url: 'String URL to Img', email: 'string of email'}
```
- `PUT - /users/profile` - Submits the changes to the users profile and on success renders the updated users profile page
```
request: {first_name: 'String', email: 'String email', image_url: 'String URL'}

response: {first_name: 'String', email: 'String email', image_url: 'String URL'}
```
- `GET - /users/register` - Renders the register user form view
```
request: no data in body

response: {errors: ['a','list','of','things','to','fix']}
```
- `GET - /users/login` - Renders the login user form view
```
request: no need to contact server on this one
```
- `PUT - /users/login` - Submits the login user form and on success redirects to `baseRoute`
```
request: {email: 'String of email', password: 'String'}

response: {errors: ['a','list','of','things','to','fix']}
```
- `PUT - /users/logout` - Submits changes the servers state in a non destructive way redirects to `baseRoute`
```
request: no data in body
```
### Calendars
- `GET - /calendars` - Renders the calendars that the current user owns and is grouped with
```
request: no data in body

response: {calendars: [
  {
    name: 'String of calendar name',
    color: color_id
  },
  {
    name: 'String of calendar name',
    color: color_id
  }
]}
```
- `PUT - /calendars` - Submits a new calendar and redirects to `/calendars/:id` or renders the `/calendars/add` on error
```
request: {
  name: 'String of calendars name',
  color: colorCode
}

response: {errors: ['an', 'array', 'of', 'errors']}
```
- `GET - /calendars/add` - Renders the calendars that the current user owns and is grouped and shows the form to add a new calendar
```
request: don't need to talk to server here
```
- `GET - /calendars/master` - **master** is a reserved calendar name for this reason
- `GET - /calendars/:id?start=unixtimestampofstart&end=unixtimestampofend` - Renders the `calendars/:id` where `:id` is the **_calendars_ id** query parameters of _start_ and _end_ are for server to pull from within those dates
```
request: no data in body

response: {
  id: calendar_id,
  name: 'String of calendar name',
  events: [
    {
      id: eventId,
      name: 'String of event name',
      location: 'String of event location',
      start: unixTimestamp of start time,
      end: unixTimestamp of end time,
      calendarId: calendar_id,
      colorId: color_id
    }
  ]
}
```
- `PUT - /calendars/:id` - Submits updates to the calendar where `:id` is the calendars id and then redirects to `GET - /calendars/:id` or displays errors
```
request: {
  name: 'String of calendars name',
  color: color_id
}

response: {errors: ['an', 'array', 'of', 'errors']} - cannot use master as a name no duplicates per user
```
### Groups
- `GET - /groups` - Renders the groups that the current user belongs to
```
request: no data in body

response: {
  groups: [
    {
      name: 'String of groups name',
      color: color_id
    }
]}
```
- `PUT - /groups` - Submits a new group and redirects to `/groups/:id` or renders the `/groups/add` on error
```
request: {
  name: 'String of groups name',
  color: color_id
}

response: {errors: ['an', 'array', 'of', 'errors']}
```
- `GET - /groups/add` - Renders the groups that the current user owns and is grouped and shows the form to add a new group
```
request: no need to talk to server here
```
- `GET - /groups/:id` - Renders the group and its associated calendar where `:id` is the **_groups_ id** that the user belongs to. It also gets a list of users names
```
request: no data in body

response: {
  id: group_id,
  name: 'String of groups name',
  color: colorCode,
  calendars: [
    {
      name: 'String of calendar name',
      color: colorCode
    }
  ],
  users: [
    {
      firstName: 'String of users first name'
    },
    {
      firstName: 'String of users first name'
    }
  ]
}
```
- `PUT - /groups/:id` - Submits updates to the group where `:id` is the groups id and then redirects to `GET - /groups/:id`
```
request: {
  name: 'String of groups name',
  color: colorCode
}

response: {errors: ['an', 'array', 'of', 'errors']}
```
- `GET - /groups/:id/addusers` - Renders the group and its associated calendars where `:id` is the **_groups_ id** that the user belongs to and displays the add user form
```
request: no need to talk to server here
```
- `PUT - /groups/:id/addusers` - Submits updates to the group where `:id` is the groups id and then redirects to `GET - /groups/:id` or on error renders the `/addusers` form data
```
request: {users: [
  'users email address as a string',
  'users email address as a string'
]}

response: {errors: ['an', 'array', 'of', 'errors']}
```


### Events
- `GET - /events?ismaster=boolean` - Returns the data containing all events for the associated calendar
  - if the calendar is the master calendar then it returns all of the events where the **_users_ id** and **merged** is `true`
```
request: no data in body, query string indicates master cal

response: {
  calendars: [{
    id: calid,
    name: 'String of calendars name',
    color: color_id,
    merged: bool
  }],
  events: [{
    id: eventId,
    name: 'String of events name',
    location: 'String of events location',
    start: unixTimestamp of start time,
    end: unixTimestamp of end time,
    color: colorCode
  },
  {
    id: eventId,
    name: 'String of events name',
    location: 'String of events location',
    start: unixTimestamp of start time,
    end: unixTimestamp of end time,
    color: colorCode
  }]
}
```
- `PUT - /events` - Submits the event data to create a new event
```
request: {
  name: 'String of event name',
  location: 'String of event location',
  start: unixTimestamp of start time,
  end: unixTimestamp of end time,
  calendarId: calendar_id,
  color: colorCode
}

response: {errors: ['an','array','of','errors']}
```
- `GET - /events/:id` - Returns the data of a specific event
```
request: no data in the body

response: {
  id: eventId,
  name: 'String of event name',
  location: 'String of event location',
  start: unixTimestamp of start time,
  end: unixTimestamp of end time,
  calendarId: calendar_id,
  color: colorCode
}
```
- `PUT - /events/:id` - Submits the data of a specific event and updates the event 
```
request: {
  id: eventId,
  name: 'String of event name',
  location: 'String of event location',
  start: unixTimestamp of start time,
  end: unixTimestamp of end time,
  calendarId: calendar_id,
  color: colorCode
}

response: {errors: ['an','array','of','errors']}
```
