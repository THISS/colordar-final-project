export default function() {
  return new Promise((resolve, reject) => {
    resolve({
      calendars: [{
          color_id: 3,
          id: 2,
          merged: true,
          name: 'Yard Work'
        }
      ],
      events: [
      {
        id: 1,
        title: "Brunch with mom",
        calendar_id: 2,
        color_id: 3,
        location: 'random location',
        start: new Date(2017, 4, 2, 10, 0),
        end: new Date(2017, 4, 2, 11, 30)
      },
      {
        "id": 2,
        "title": "Meeting at work",
        "start": new Date(2017, 3, 25, 12, 30),
        "end": new Date(2017, 3, 25, 14, 30)
      },
      {
        "id": 3,
        "title": "Drinks with Jeff and Batman",
        "start": new Date(2017, 4, 2, 17, 0),
        "end": new Date(2017, 4, 2, 18, 30)
      },
      {
        "id": 4,
        "title": "Dessert time",
        "start": new Date(2017, 3, 25, 19, 30),
        "end": new Date(2017, 3, 25, 20, 30)
      },
      {
        "id": 5,
        "title": "Making Chicken Wings",
        "start": new Date(2017, 3, 10),
        "end": new Date(2017, 3, 11)
      },
      {
        "id": 6,
        "title": "Hot Pot",
        "start": new Date(2017, 3, 16),
        "end": new Date(2017, 3, 18)
      },
      {
        "id": 7,
        "title": "Meetings with important people",
        "start": new Date(2017, 3, 17, 14, 30),
        "end": new Date(2017, 3, 17, 16, 30)
      },
      {
        "id": 8,
        "title": "DEMO DAY D:",
        "start": new Date(2017, 4, 4, 19, 0),
        "end": new Date(2017, 4, 4, 21, 0)
      },
      {
        "id": 9,
        "title": "Important presentation",
        "start": new Date(2017, 3, 20, 19, 0),
        "end": new Date(2017, 3, 20, 21, 0)
      }
    ]}
    );
  });
}