import React from 'react';

const user = {
  name: 'BamdadGoshtasbi',
  //imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  //imageUrl: 'https://avatars.githubusercontent.com/u/51804836?v=4',
  //imageUrl: 'https://i.scdn.co/image/ab67616d00001e02b151437d4adc97ce6c828d4a',
  imageUrl: 'https://media.licdn.com/dms/image/D5603AQGMSSK4p3mfvQ/profile-displayphoto-shrink_800_800/0/1681613630579?e=2147483647&v=beta&t=M7i2-8kIiMBF4xL4HC1Q1FHfurla9Mu_dANU3_Lohn8',

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
