import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  themeMode: boolean;
}

interface ActionType {
  payload: boolean;
}

const initialState: AppState = {
  themeMode: false,
  // 初始化其他属性的默认值...
};

export const appStoreSlice = createSlice({
  name: "appStore",
  initialState: initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = !state.themeMode;
    },
    setThemeMode: (state, action: ActionType) => {
      state.themeMode = action.payload;
    },
    // 可以添加其他 reducer 来更新其他属性...
  },
});

export const { toggleThemeMode, setThemeMode } = appStoreSlice.actions;

// 添加其他 selector 来访问其他属性...
export const selectApp = (state: RootState) => ({
  value: state.appStore.themeMode,
  // 访问其他属性...
});

export default appStoreSlice.reducer;
