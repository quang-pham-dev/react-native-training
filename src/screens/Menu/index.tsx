/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react'
import {Alert, TouchableOpacity} from 'react-native'

// LIBS
import {DrawerActions} from '@react-navigation/native'
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types'
import {DrawerContentScrollView} from '@react-navigation/drawer'

// Components
import Switch from '@components/Switch'

// Screens
import DrawerItem from '@screens/Menu/components'

// Context
import {useAuthContext} from '@contexts/auth/AuthContext'
import {
  SIGN_OUT,
  SIGN_OUT_FAILED,
  SIGN_OUT_SUCCESS,
} from '@contexts/auth/actions/auth'

// Constants
import {AUTH_DATA, PARAGRAPH_TYPE, STACKS_NAMES} from '@constants'

// Themes
import {Colors, Icons, Metrics} from '@themes'

// Styles
import IconStyled from '@components/Icon/Icon.styles'
import PStyled from '@components/Paragraph/P.styles'

// Api
import {authService} from '@apis'

// Services
import {remove} from '@services'
import LayoutStyled from '@components/Layout/Layout.styles'
import ViewStyled from '@components/View/View.styles'
import {s, vs} from 'react-native-size-matters/extend'
import FlexStyled from '@components/Flex/Flex.styles'
import {Image} from '@components/Image/Image.styles'

export interface ISideMenuPros {
  navigation: DrawerNavigationHelpers
}

const Menu = ({navigation}: ISideMenuPros) => {
  const {state, dispatch} = useAuthContext()

  const {currentUser} = state || {}

  const {username, avatar} = currentUser || {}

  const orderCount = 3

  // handel action sign out
  const handlePressLogoutIcon = useCallback(() => {
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: async () => {
          navigation.toggleDrawer()

          dispatch({type: SIGN_OUT})
          try {
            await authService.signOut()
            await remove(AUTH_DATA)
            dispatch({
              type: SIGN_OUT_SUCCESS,
            })
          } catch (error: any) {
            dispatch({type: SIGN_OUT_FAILED, payload: error})
            Alert.alert('Error', error.message)
          }
        },
      },
    ])
  }, [])

  // handle Close menu
  const handleCloseMenu = useCallback(() => {
    navigation.dispatch(DrawerActions.closeDrawer())
  }, [])

  // handle action navigate to Bag screen
  const handlePressBagIcon = useCallback(() => {
    navigation.navigate(STACKS_NAMES.BAG_STACK)
  }, [])

  // handle action navigate to WishList screen
  const handlePressWishlistIcon = useCallback(() => {
    navigation.navigate(STACKS_NAMES.WISHLIST_STACK)
  }, [])

  // handle action navigate to Wallet screen
  const handlePressWalletIcon = useCallback(() => {
    navigation.navigate(STACKS_NAMES.WALLET_STACK)
  }, [])

  // Drawer List Item
  const renderDrawerItem = [
    {
      title: 'Account Information',
      source: Icons.info,
    },
    {
      title: 'Order',
      source: Icons.bagDrawer,
      onPress: handlePressBagIcon,
    },
    {
      title: 'Wallet',
      source: Icons.walletDrawer,
      onPress: handlePressWalletIcon,
    },
    {
      title: 'WishList',
      source: Icons.heartDrawer,
      onPress: handlePressWishlistIcon,
    },
  ]

  return (
    <DrawerContentScrollView>
      <LayoutStyled.Main>
        <ViewStyled.Custom>
          <TouchableOpacity onPress={handleCloseMenu}>
            <IconStyled source={Icons.menuOpen} />
          </TouchableOpacity>
        </ViewStyled.Custom>

        <FlexStyled.FlexSpaceBetween pTop={vs(30)}>
          <FlexStyled.Row>
            <Image.Normal
              alignSelf="center"
              height={s(45)}
              width={s(45)}
              source={{
                uri: avatar,
              }}
              borderRadius={vs(45)}
              resizeMode="cover"
              mRight={s(Metrics.padding.medium)}
            />
            <FlexStyled.FlexColum>
              <PStyled.Base
                mBottom={vs(10)}
                type={PARAGRAPH_TYPE.PROFILE_USERNAME}>
                {username}
              </PStyled.Base>
              <FlexStyled.RowCenter>
                <PStyled.Base type={PARAGRAPH_TYPE.PROFILE_VERIFIED}>
                  Verified Profile
                </PStyled.Base>
                <IconStyled source={Icons.badge} />
              </FlexStyled.RowCenter>
            </FlexStyled.FlexColum>
          </FlexStyled.Row>
          <FlexStyled.Center>
            <ViewStyled.Custom
              pHorizontal={s(10)}
              pVertical={s(10)}
              bRadius={s(5)}
              bgColor={Colors.palette.wildSand}>
              <PStyled.Center>{`${orderCount} Orders`}</PStyled.Center>
            </ViewStyled.Custom>
          </FlexStyled.Center>
        </FlexStyled.FlexSpaceBetween>
        {/* end header */}

        <FlexStyled.FlexSpaceBetween pTop={vs(30)}>
          <FlexStyled.Row>
            <DrawerItem title="Dark Mode" source={Icons.sun} />
          </FlexStyled.Row>

          <FlexStyled.Center pTop={vs(Metrics.padding.mediumPlus)}>
            <Switch value={false} />
          </FlexStyled.Center>
        </FlexStyled.FlexSpaceBetween>

        {/* End Dark mode  */}

        {/* Main Drawer Menu */}
        {renderDrawerItem.map(({title, source, onPress}) => (
          <DrawerItem
            key={title}
            title={title}
            source={source}
            onPress={onPress}
          />
        ))}
        {/* End Main Drawer Menu */}
        {/* end main */}

        <ViewStyled.Custom pTop={vs(220)}>
          <DrawerItem
            title="Logout"
            source={Icons.logout}
            onPress={handlePressLogoutIcon}
          />
        </ViewStyled.Custom>
      </LayoutStyled.Main>
    </DrawerContentScrollView>
  )
}

export default Menu
