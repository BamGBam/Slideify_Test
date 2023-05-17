import React from 'react';

const user = {
  name: 'BamdadGoshtasbi',
  //imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  //imageUrl: 'https://avatars.githubusercontent.com/u/51804836?v=4',
  imageUrl: 'https://i.scdn.co/image/ab67616d00001e02b151437d4adc97ce6c828d4a',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize + 'px',
          height: user.imageSize + 'px',
        }}
      />
    </>
  );
}
