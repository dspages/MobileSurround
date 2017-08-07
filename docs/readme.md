# Mobile Surround

Single Page application for iPhone. This app will allow people to use multiple phones to create a surround sound system. A song or sound can be divided into its channels and then one channel will be played by each phone.


Trello Link :
https://trello.com/b/x8lJ6aQa/mobile-surround

## Design Docs
- [Time Synchronize](./images/image1.JPG)
- [Component-Hierarchy](./component_hierarchy.md)


## MVP:
- React native app running on iPhone.
- Synchronize time with external source of truth.
- Play same audio file on multiple devices.
- Production readme.
- Host on App Store.
- Pausing song mid play.

## Stretch:
- Play same audio file at same time with negligible offset.
- Share audio file and down-mix by channels.
- Share audio peer to peer/ or server.
- Android functionality.
- React-native-multipeer communication functionality.
- API to allow other apps (games, video players, etc.) to use the program

## WireFrames:
- See physical copies.

## Phase 1: (One day)
- Project init
- Ping external source of truth.(react-native-gps)
- Github init.
- Start react-native app.
- Readme.

## Phase 2: (One day)
- Peer to peer communication.(react-native-multipeer)
- Peer to peer file-sharing.

## Phase 3: (One day)
- Audio playback.
- Use test stereo audio(https://www.youtube.com/watch?v=4bJ0dvAl98k)

## Phase 4: (One day)
- Down-mixing.
- Audio server.

## Phase 5: (One day)
- Create frontend.
- Polish frontend.
- Allow user to choose speaker.
- 4 digit key to allow phones to use database.


## Phase 6: (One day)
- Push to app store.
- App store server.
- Fix remaining bugs.
