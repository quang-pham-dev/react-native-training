import PushNotification from 'react-native-push-notification'
import DemoNotificationHandler from './push-notifications'

export default class DemoNotificationService {
  constructor(onTokenReceived: any, onNotificationReceived: any) {
    DemoNotificationHandler.attachTokenReceived(onTokenReceived)
    DemoNotificationHandler.attachNotificationReceived(onNotificationReceived)
    PushNotification.getApplicationIconBadgeNumber(function (number: number) {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0)
      }
    })
  }

  checkPermissions(cbk: any) {
    return PushNotification.checkPermissions(cbk)
  }

  requestPermissions() {
    return PushNotification.requestPermissions()
  }

  cancelNotifications(msg: string) {
    PushNotification.cancelLocalNotification(msg)
  }

  cancelAll() {
    PushNotification.cancelAllLocalNotifications()
  }

  abandonPermissions() {
    PushNotification.abandonPermissions()
  }
}
