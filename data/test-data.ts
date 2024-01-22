import { v4 as uuidv4 } from "uuid";

export function createChannelsEpgs() {
  let channels = [];
  let epgs = [];

  for (let i = 0; i < lunches.length; i++) {
    const channelUuid = uuidv4();

    channels.push({
      uuid: channelUuid,
      type: "channel",
      title: lunches[i].name,
      logo: "https://raw.githubusercontent.com/karolkozer/planby-demo-resources/master/resources/channel-logos/png/r-channel.png",
    });
    if (lunches[i].getsLunch) {
      epgs.push({
        id: uuidv4(),
        description: "Time to work before lunch",
        title: "Work",
        isYesterday:
          lunches[i].shiftStart.getDay() !== lunches[i].lunchStart.getDay(),
        since: lunches[i].shiftStart.toISOString(),
        till: lunches[i].lunchStart.toISOString(),
        channelUuid: channelUuid,
        image:
          "https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
      });

      epgs.push({
        id: uuidv4(),
        description: "Time for lunch",
        title: "Lunch",
        isYesterday:
          lunches[i].lunchStart.getDay() !==
          new Date(lunches[i].lunchStart.getTime() + 30 * 60000).getDay(),
        since: lunches[i].lunchStart,
        till: new Date(
          lunches[i].lunchStart.getTime() + 30 * 60000
        ).toISOString(),
        channelUuid: channelUuid,
        image:
          "https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
      });

      epgs.push({
        id: uuidv4(),
        description: "Time to work after lunch",
        title: "Work",
        isYesterday:
          new Date(lunches[i].lunchStart.getTime() + 30 * 60000).getDay() !==
          lunches[i].shiftEnd.getDay(),
        since: new Date(
          lunches[i].lunchStart.getTime() + 30 * 60000
        ).toISOString(),
        till: lunches[i].shiftEnd.toISOString(),
        channelUuid: channelUuid,
        image:
          "https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
      });
    } else {
      epgs.push({
        id: uuidv4(),
        description: "Time to work",
        title: "Work",
        isYesterday:
          lunches[i].shiftStart.getDay() !== lunches[i].shiftEnd.getDay(),
        since: lunches[i].shiftStart.toISOString(),
        till: lunches[i].shiftEnd.toISOString(),
        channelUuid: channelUuid,
        image:
          "https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
      });
    }
  }

  return { channels, epgs };
}

export const lunches = [
  {
    getsLunch: true,
    name: "Andy",
    shiftStart: new Date(
      "Wed Jan 17 2024 15:00:00 GMT-0500 (Eastern Standard Time)"
    ),
    shiftEnd: new Date(
      "Thu Jan 18 2024 01:30:00 GMT-0500 (Eastern Standard Time)"
    ),
    lunchStart: new Date(
      "Wed Jan 17 2024 19:45:00 GMT-0500 (Eastern Standard Time)"
    ),
  },
  {
    getsLunch: true,
    name: "Gabby",
    shiftStart: new Date(
      "Wed Jan 17 2024 15:30:00 GMT-0500 (Eastern Standard Time)"
    ),
    shiftEnd: new Date(
      "Thu Jan 18 2024 00:30:00 GMT-0500 (Eastern Standard Time)"
    ),
    lunchStart: new Date(
      "Wed Jan 17 2024 19:15:00 GMT-0500 (Eastern Standard Time)"
    ),
  },
  {
    getsLunch: false,
    name: "Braden",
    shiftStart: new Date(
      "Wed Jan 17 2024 17:00:00 GMT-0500 (Eastern Standard Time)"
    ),
    shiftEnd: new Date(
      "Wed Jan 17 2024 22:00:00 GMT-0500 (Eastern Standard Time)"
    ),
    lunchStart: new Date(
      "Wed Jan 17 2024 17:00:00 GMT-0500 (Eastern Standard Time)"
    ),
  },
  {
    getsLunch: true,
    name: "Zach",
    shiftStart: new Date(
      "Wed Jan 17 2024 16:00:00 GMT-0500 (Eastern Standard Time)"
    ),
    shiftEnd: new Date(
      "Thu Jan 18 2024 01:00:00 GMT-0500 (Eastern Standard Time)"
    ),
    lunchStart: new Date(
      "Wed Jan 17 2024 20:15:00 GMT-0500 (Eastern Standard Time)"
    ),
  },
];
