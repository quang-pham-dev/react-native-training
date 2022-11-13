import React from 'react'

// Navigator
import {Stack} from '@navigators'

// Screens
import {Home, BrandDetail, ProductDetail, Notifications} from '@screens'

// Constants
import {SCREEN_NAMES} from '@constants'

// Themes
import {Colors} from '@themes'

// Contexts
import {BrandsContextProvider, ProductContextProvider} from '@contexts'

const HomeStack = () => (
  <BrandsContextProvider>
    <ProductContextProvider>
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.HOME}
        screenOptions={{
          headerShadowVisible: false,
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: Colors.palette.black,
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: Colors.palette.transparent,
          },
        }}>
        <Stack.Screen name={SCREEN_NAMES.HOME} component={Home} />
        <Stack.Screen
          name={SCREEN_NAMES.BRAND_DETAIL}
          component={BrandDetail}
        />
        <Stack.Screen
          name={SCREEN_NAMES.PRODUCT_DETAIL}
          component={ProductDetail}
        />
        <Stack.Screen
          name={SCREEN_NAMES.NOTIFICATIONS}
          component={Notifications}
        />
      </Stack.Navigator>
    </ProductContextProvider>
  </BrandsContextProvider>
)

export default HomeStack
