import React, {useState} from 'react'

// Libs
import {s, vs} from 'react-native-size-matters/extend'

//Contexts
import {useAuthContext} from '@contexts'

// Hooks
import {useNotificationHook} from '@hooks/usePushLocalNotification'

// Components
import {BtnType, SocialButton} from '@components/Button'

// Styles
import FlexStyled from '@components/Flex/Flex.styles'
import ViewStyled from '@components/View/View.styles'
import HeadingStyled from '@components/Heading/Heading.styles'

// Themes
import {Colors} from '@themes'

// Constants
import {HEADING_TYPE} from '@constants'

const Notifications = () => {
  const [notificationId, setNotificationId] = useState(0)
  const {state} = useAuthContext()

  const {currentUser} = state || {}
  const {username} = currentUser || {}

  const {schedule, pushNotification} = useNotificationHook()

  const scheduleNotification = () => {
    schedule({
      id: notificationId,
      message: `Hi Elaza ${username}`, // (required)
      date: new Date(Date.now() + 3 * 1000), // in 3 secs
    })

    setNotificationId(notificationId + 1)
  }

  return (
    <>
      <FlexStyled.Center flex={1}>
        <HeadingStyled type={HEADING_TYPE.H1}>
          App demo notifications
        </HeadingStyled>
      </FlexStyled.Center>

      <ViewStyled.Custom pBottom={s(50)} pHorizontal={s(20)}>
        <SocialButton
          type={BtnType.SOCIAL}
          bgColor={Colors.palette.google}
          onPress={pushNotification}
          label="Send Local notification"
        />
        <ViewStyled.Custom pVertical={vs(20)}>
          <SocialButton
            type={BtnType.SOCIAL}
            bgColor={Colors.palette.facebook}
            onPress={scheduleNotification}
            label="Set notification after 3 seconds"
          />
        </ViewStyled.Custom>
      </ViewStyled.Custom>
    </>
  )
}

export default Notifications
