// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_ACCESSTOKEN = 'SET_ACCESSTOKEN';

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        payload: username,
    };
};

export const setAccessToken = (accessToken) => {
    return {
        type: SET_ACCESSTOKEN,
        payload: accessToken,
    };
};
