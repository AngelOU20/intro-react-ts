import { useState } from 'react';

interface UserType {
  uid: string | null;
  username: string | null;
}

const initialState: UserType = {
  uid: null,
  username: null,
};

export const User: React.FC = () => {
  const [user, setUser] = useState<UserType>(initialState);

  const login = (): void => {
    setUser({
      uid: 'ABC123',
      username: 'Julio Ucharima',
    });
  };

  const logout = (): void => {
    setUser(initialState);
  };

  return (
    <div className="flex flex-column">
      <h2 className="h2-purple">User: useState</h2>

      <div className="flex">
        <button onClick={login}>Login</button>

        <button onClick={logout}>Logout</button>
      </div>

      {user.uid ? <pre>{JSON.stringify(user)}</pre> : <></>}
    </div>
  );
};
