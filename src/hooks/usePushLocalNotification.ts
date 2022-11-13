import {RefObject} from 'react'

// Libs
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import PushNotification from 'react-native-push-notification'

// Constants
import {isIOS} from '@constants'

export const useNotificationHook = () => {
  const initialize = (navigator: RefObject<any>) => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: token => {
        console.log('TOKEN:', token)
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: notification => {
        console.log('NOTIFICATION:', notification)
        const {data} = notification
        const {navigation} = data
        if (navigation) {
          navigator.current?.navigate(navigation)
        }
        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData)
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: notification => {
        console.log('ACTION:', notification.action)
        console.log('NOTIFICATION:', notification)

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: err => {
        console.error(err.message, err)
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: isIOS(),
    })

    PushNotification.createChannel(
      {
        channelId: 'default-channel-id', // (required)
        channelName: 'Default channel', // (required)
        channelDescription: 'A default channel', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created =>
        console.log(`createChannel 'default-channel-id' returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    )

    return null
  }

  const pushNotification = () => {
    PushNotification.localNotification({
      channelId: 'default-channel-id', // (required)
      bigText:
        'This is local notification demo in React Native app. Only shown, when expanded.',
      subText: 'Local Notification Demo',
      title: 'Hello Quangpham',
      message: 'Welcome to Elaza app',
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      actions: ['Yes', 'No'],
    })
  }

  const schedule = (option: Record<string, any>) => {
    PushNotification.localNotificationSchedule({
      message: '',
      date: new Date(), // in 30 secs
      id: 1,
      channelId: 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_launcher',
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
      showWhen: true, // (optional) default: true

      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      ...option,
    })
  }

  const removeNotification = (id: any) => {
    PushNotification.cancelLocalNotification(id)
  }

  const removeAllScheduleNotification = () => {
    PushNotification.cancelAllLocalNotifications()
  }

  const listNotification = () => {
    PushNotification.getScheduledLocalNotifications(notifications => {
      console.log('Notifications', notifications)
    })
  }

  return {
    initialize,
    schedule,
    pushNotification,
    removeNotification,
    removeAllScheduleNotification,
    listNotification,
  }
}
