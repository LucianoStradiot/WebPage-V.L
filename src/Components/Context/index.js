import { useContext, useState, createContext } from 'react';

const StateContext = createContext({
  user: null,
  role: null,
  setUser: () => {},
  setToken: () => {}
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, _setToken] = useState(sessionStorage.getItem('ACCESS_TOKEN'));

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      sessionStorage.setItem('ACCESS_TOKEN', token);
    } else {
      sessionStorage.removeItem('ACCESS_TOKEN');
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    description: '',
    title: '',
    confirmBtn: '',
    denyBtn: '',
    chooseModal: false,
    onClick: null
  });

  const openModal = (modalConfig) => {
    setModalState({
      isOpen: true,
      ...modalConfig
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      description: '',
      title: '',
      confirmBtn: '',
      denyBtn: '',
      chooseModal: false,
      onClick: null
    });
  };

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
