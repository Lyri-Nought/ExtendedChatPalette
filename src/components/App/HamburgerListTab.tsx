import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import ExChatPaletteView from "./ExChatPaletteView"

const theme = createTheme({
    palette: {
        action: {
            hover: "rgba(255, 255, 255, 0.08)"
        }
    }
});

export default function HamburgerListTab() { // レスポンシブデザイン用のリスト内の拡張チャットパレット欄
    // 拡張チャットパレットが開いているかどうかを管理する
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    function openMenu(): void{
        setMenuVisible(true);
    };

    useEffect(() => {
        // menuVisibleがtrueになったら、ポータルに<ExChatPaletteView />を追加する
        if (menuVisible) {
            ReactDOM.render(
                <ExChatPaletteView />,
                document.getElementById("portal-root")
            );
        }
    }, [menuVisible]);

    return (
        <ThemeProvider theme={theme}>
            <MenuItem
            onClick={(event: React.SyntheticEvent) => {
                // メニュー表示中に、ハンバーガーリストボタンを再度クリックし、メニューを閉じる
                const HamburgerListButton: HTMLButtonElement | null = document.querySelector("#root > div > header > div > button.MuiButtonBase-root.MuiIconButton-root.sc-eFWqGp.jBnKGh");
                HamburgerListButton?.click();
                openMenu();
            }}
            >
                拡張チャットパレット
            </MenuItem>
        </ThemeProvider>
    );
}