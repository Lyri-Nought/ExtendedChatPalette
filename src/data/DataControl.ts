import { Data, Settings, Tab } from "./DataModel"

function clipUrl(url: string): string{ // URLのクエリ文字列やURLフラグメントを取り除いた、URLのパス部分を取得する関数
    const urlObj: URL = new URL(url);
    const path: string = urlObj.pathname;
    const extractedPart: string = path.split('/').pop() || "";
    return extractedPart
}
function getRoomId(): string{ // ココフォリアのルームIDを取得する関数
    let result: string = "";
    const url: string = location.href;
    result = clipUrl(url);
    return result
}
function getRoomName(): string {
    let result: string;
    const targetElement: Element | null = document.querySelector("#root > div > header > div > button:nth-child(1) > span.MuiButton-label > h6");
    result = targetElement?.childNodes[0]?.textContent || ""
    return result;
}

type RoomData = {
    roomId: string,
    roomName: string
}
export function getRoomData(): RoomData{ // 部屋IDと部屋名を取得する関数
    const result: RoomData = {
        roomId: getRoomId(),
        roomName: getRoomName()
    }
    return result;
}

export async function getSettings(): Promise<Settings>{
    let initialData: Settings = { //デフォルト値
        enableExDodge : true
    }
    return new Promise<Settings>((resolve, reject) => {
        chrome.storage.local.get(["settings"], function(response){
            try{
                const settings: Settings = response["settings"] as Settings
                resolve(settings);
            }catch(error) {
                resolve(initialData);
            }
        });
    });
}

export async function getTabNames(roomId: string = getRoomId()): Promise<string[]>{
    let initialData: string[] = ["メイン"] //デフォルト値
    return new Promise<string[]>((resolve, reject) => {
        chrome.storage.local.get(["data", roomId, "tabs"], function(response){
            try{
                const data: Tab[] = response["data"][roomId]["tabs"] as Tab[]
                const tabNames: string[] = new Array;
                data.forEach(element => {
                    tabNames.push(element.tabName)
                });
                resolve(tabNames);
            }catch(error) {
                resolve(initialData);
            }
        });
    });
}

export async function getTexts(roomId: string = getRoomId()): Promise<string[]>{
    let initialData: string[] = [""] //デフォルト値
    return new Promise<string[]>((resolve, reject) => {
        chrome.storage.local.get(["data", roomId, "tabs"], function(response){
            try{
                const data: Tab[] = response["data"][roomId]["tabs"] as Tab[]
                const texts: string[] = new Array;
                data.forEach(element => {
                    texts.push(element.originText)
                });
                resolve(texts);
            }catch(error) {
                resolve(initialData);
            }
        });
    });
}

export async function saveTabData(tabNames: string[], texts: string[], roomId: string = getRoomId(), roomName: string = getRoomName()): Promise<object>{
    return new Promise<object>((resolve, reject) => {
        if(tabNames.length !== texts.length){
            throw new Error("tabNames と texts の数が違います");
        }
        // 既存のデータを取得
        chrome.storage.local.get("data", function(response) {
            const existingData = response.data || {}; // 既存のデータ
            const result: object[] = new Array;
            for(let i: number = 0; i < tabNames.length; i++){
                const currentData: object = {
                    tabName: tabNames[i],
                    originText: texts[i]
                }
                result.push(currentData)
            }
            // 既存のデータと新しいデータをマージ
            existingData[roomId] = {
                roomName: roomName,
                tabs: result
            };
            // 既存のデータをデータベースに保存する
            const sendData: object = { data: existingData }
            chrome.storage.local.set(sendData, function() {
                resolve(sendData);
            });
        });
    });
}