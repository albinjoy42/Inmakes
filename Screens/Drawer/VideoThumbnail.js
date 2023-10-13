import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';

function VideoThumbnail({ videos }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const playVideo = (index) => {
    setActiveVideoIndex(index);
  };

  return (
    <ScrollView horizontal={true} style={{ marginRight: 15 }}>
      {videos.map((video, index) => (
        <View key={index}>
          {activeVideoIndex === index ? (
            <Video
              source={video.videoSource}
              style={{ width: 200, height: 115, borderWidth: 1, borderRadius: 5, marginRight: 8 }}
              resizeMode="cover"
              controls={true}
            />
          ) : (
            <TouchableOpacity onPress={() => playVideo(index)}>
              <View>
                <Image source={video.thumbnailSource} style={{ width: 200, height: 115, borderWidth: 1, borderRadius: 5, marginRight: 8,zIndex:-1 }} />
                <Icon name="play-circle" size={20} style={{ marginTop:-20, zIndex: 1 }} />
              </View>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

export default VideoThumbnail;
