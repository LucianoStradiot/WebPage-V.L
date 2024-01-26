import { useContext, useState, createContext } from 'react';

const StateContext = createContext({
  user: null,
  homeInfo: {
    principalTitle: '',
    biography: '',
    secondaryTitle: '',
    descriptionLeft: '',
    descriptionRight: '',
    motivationalPhrase: ''
  },
  setUser: () => {},
  setToken: () => {},
  setHomeInfo: () => {}
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, _setToken] = useState(sessionStorage.getItem('ACCESS_TOKEN'));
  const [homeInfo, _setHomeInfo] = useState(() => {
    const storedHomeInfo = sessionStorage.getItem('homeInfo');
    return storedHomeInfo
      ? JSON.parse(storedHomeInfo)
      : {
          principalTitle: '',
          biography: '',
          secondaryTitle: '',
          descriptionLeft: '',
          descriptionRight: '',
          motivationalPhrase: '',
          profilePhoto: ''
        };
  });

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      sessionStorage.setItem('ACCESS_TOKEN', token);
      sessionStorage.setItem('homeInfo', JSON.stringify(homeInfo));
    } else {
      sessionStorage.removeItem('ACCESS_TOKEN');
      sessionStorage.removeItem('homeInfo');
    }
  };

  const setHomeInfo = (info) => {
    _setHomeInfo(info);
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        homeInfo,
        setHomeInfo,
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
    inputModalBiography: false,
    inputModalHelpClients: false,
    inputModalPhrase: false,
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
      inputModalBiography: false,
      inputModalHelpClients: false,
      inputModalPhrase: false,
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
