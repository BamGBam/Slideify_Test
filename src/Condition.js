import React from 'react';

function MyComponent({ isLoggedIn }) {
    let content;
    if (isLoggedIn) {
      content = <AdminPanel />;
    } else {
      content = <LoginForm />;
    }
  
    return (
      <div>
        {content}
      </div>
    );
  }