import * as React from 'react';
import { View,ScrollView, Image } from 'react-native';
import styles from '../global_style/style.js';

const images = {
	myImage: [
            require('../assets_folder/images/download.jpg'),
            require('../assets_folder/images/download(1).jpg'),
            require('../assets_folder/images/download(2).jpg'),
            require('../assets_folder/images/download(3).jpg'),
            require('../assets_folder/images/download(4).jpg'),
            require('../assets_folder/images/download(5).jpg'),
            require('../assets_folder/images/download(6).jpg'),
            require('../assets_folder/images/download(7).jpg'),
            require('../assets_folder/images/download(8).jpg'),
            require('../assets_folder/images/download(9).jpg'),
          ],
}

const MyImage = (props) => {
    return(
      <View style = { styles.container }>
        <Image source={props.img} style = { styles.image }/>
      </View>
    );
}

const SampleImages = () => {
  return(
    <ScrollView>
        <MyImage img = {images.myImage[0]}/>
        <MyImage img = {images.myImage[1]}/>
        <MyImage img = {images.myImage[2]}/>
        <MyImage img = {images.myImage[3]}/>
        <MyImage img = {images.myImage[4]}/>
        <MyImage img = {images.myImage[5]}/>
        <MyImage img = {images.myImage[6]}/>
        <MyImage img = {images.myImage[7]}/>
        <MyImage img = {images.myImage[8]}/>
        <MyImage img = {images.myImage[9]}/>
    </ScrollView>
  );
}

export default SampleImages;