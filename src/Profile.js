import React from 'react';

const user = {
  name: 'Neman Faiz',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
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
