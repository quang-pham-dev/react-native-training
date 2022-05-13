import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, SafeAreaView, View } from 'react-native';
// Components
import BrandsCardList from 'components/BrandList';
import Header from 'components/Layout/Header';
import SearchBar from 'components/SearchBar';
import ProductsList from 'components/ProductsList';
import Title from 'components/Title';
// Hooks
import useAuth from 'hooks/useAuth';
// Mock data
import { brandsData, productsData } from '__mocks__/dataMock';
// Styles
import styles from './styles';
import { StackScreenProps } from '@react-navigation/stack';
// Types
import { HomeStackParams } from 'types/Navigation';

const HomeScreen = ({ navigation }: StackScreenProps<HomeStackParams>) => {
  // Get Current User
  const { currentUser } = useAuth();
  // State for search bar
  const [text, setText] = useState('');

  // handle action navigate to Brand Detail Screen
  const handleNavigationBrandDetailScreen = (id: string) => {
    console.log(id);
    // navigation.navigate('BrandDetail', { id: id });˝
  };

  // handle action navigate to Brand Detail Screen
  const handleNavigationProductDetailScreen = (id: string) => {
    console.log(id);
    // navigation.navigate('ProductDetail', { id: id });˝
  };

  const handleLikeProduct = () => {
    console.log('like');
  };

  // handle action search
  const onSubmitEditing = () => {
    console.log(text);
  };
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView style={styles.homeMain}>
        <KeyboardAvoidingView>
          <View style={styles.header}>
            <Header navigation={navigation} />
            {/* end header layout */}
            <View style={styles.headerTitleWrapper}>
              <Title titleName='Hello' titleStyles={styles.headerTitle}></Title>
              {currentUser?.username ? (
                <Title titleName={currentUser?.username} titleStyles={styles.userNameTitle}></Title>
              ) : null}
            </View>
            <Title titleName='Welcome to Laza.' titleStyles={styles.subTitle}></Title>
            <SearchBar
              onChangeText={text => setText(text)}
              onSubmitEditing={onSubmitEditing}
              value={text}
            />
          </View>
          <View style={styles.body}>
            <BrandsCardList
              brandsData={brandsData}
              handleNavigationBrandDetailScreen={handleNavigationBrandDetailScreen}
            />
            <ProductsList
              productsData={productsData}
              handleLikeProduct={handleLikeProduct}
              handleNavigationProductDetailScreen={handleNavigationProductDetailScreen}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
