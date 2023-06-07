import { changeMessage, clickSubmitButton } from "./sendCcfoliaMessage"


rollDiceFromResult("1d3 【魔剣創造消費MP】",":MP-$","$")



// 特定のダイスロール結果を元に、ダイスロールを行う関数
export async function rollDiceFromResult(firstRole: string, secondRole: string, variableName: string = "$value"){
    // 現在の発言キャラクターを取得する
    const characterNameElm: HTMLInputElement | null = document.querySelector("#root > div > div.MuiDrawer-root.MuiDrawer-docked.sc-fbPSWO.cRgvHx > div > div > div > form > div.sc-lbxAil.jRFYca > div.sc-kgUAyh.bvBYpc > div > input");
    const characterName: string =  characterNameElm?.value || "noname";

    // 最初のロール結果の監視を開始する
    const watchPromise: Promise<string> = watchMessage(characterName, firstRole);

    // 最初のロール結果の監視をしている間に、最初のロールを行う
    changeMessage(firstRole);
    clickSubmitButton();

    // 最初のロール結果を取得する
    const firstRoleResult: string = await watchPromise;

    // secondRoleテキスト内のvariableNameと一致する箇所を、firstRoleResultで置き換える
    const pattern: RegExp = new RegExp(("\\" + variableName), "g");
    const replacedSecondRole = secondRole.replace(pattern, firstRoleResult);

    // 最初のロール結果を使用した、次のロールを行う
    changeMessage(replacedSecondRole);
    clickSubmitButton();
}

// 指定したテキストのロール結果を取得する関数
// 注意：メッセージが新しく送信されたのか、スクロールされてメッセージが表示されたのかは判定できない
async function watchMessage(targetCharacterName, targetMessage): Promise<string>{
    return new Promise((resolve, reject) => {
        // 監視するDOMノードを取得
        const targetNode = document.querySelector("#root > div > div.MuiDrawer-root.MuiDrawer-docked.sc-fbPSWO.cRgvHx > div > div > ul > div:nth-child(1) > div > div");
        if(!targetNode) throw new Error("メッセージ欄が見当たりませんでした。")

        // MutationObserverオブジェクトを作成する
        const observer = new MutationObserver(function(mutationsList, observer) {
            // 変更が検出された際に実行されるコールバック関数
            for(const mutation of mutationsList) {
                if ((mutation.type === 'childList') && (mutation.addedNodes.length > 0)) {
                    // ここに追加された要素に対する処理を記述
                    const addedMessageDiv: HTMLElement = mutation.addedNodes[0] as HTMLElement;// メッセージが送信されて追加されたDiv要素を取得する
                    /* console.log('ページ内での要素の追加を検知しました',addedMessageDiv); */

                    // キャラ名を取得する
                    const characterNameElm = addedMessageDiv.querySelector("span"); // キャラ名の要素
                    if(!characterNameElm) return;
                    const characterName = characterNameElm.textContent; // キャラ名
                    if(characterName !== targetCharacterName) return; // キャラ名が指定と異なる場合は、追加された要素に対する処理を終了する

                    // ロール内容を取得する
                    const roleContentElm = addedMessageDiv.querySelector("p");
                    if(!roleContentElm) return;
                    if(!roleContentElm.firstChild) return;
                    const roleContent = roleContentElm.firstChild.textContent; // ロール内容
                    if(roleContent === targetMessage) return; // ロール内容が指定と異なる場合は、追加された要素に対する処理を処理する

                    // ロール結果を取得する
                    const roleResultElm = roleContentElm.querySelector("span");
                    if(!roleResultElm){
                        // ロール結果がないようなロールを監視しているなら、監視を終了する
                        observer.disconnect(); // DOMの監視を終了する
                        resolve(""); // ロール結果を返してPromiseを解決する
                        return;
                    }
                    const roleResult = extractRoleResult(roleResultElm.textContent); // ロール結果

                    // キャラ名とロール内容が指定と一致する場合のみ、ロール結果を返す
                    /* console.log(`${targetMessage}の結果は「${roleResult}」でした。`) */
                    observer.disconnect(); // DOMの監視を終了する
                    resolve(roleResult); // ロール結果を返してPromiseを解決する
                }
            }
        });

        // 監視オプションを設定
        const config = { childList: true, subtree: false };

        // 監視を開始
        observer.observe(targetNode, config);
    });
}

// テキストからロール結果を抽出する関数
function extractRoleResult(text) {
    // テキスト内の最後の「＞」の位置を探す
    const arrowIndex = text.lastIndexOf("＞");

    // 「＞」が存在しない場合は空文字列を返す
    if (arrowIndex === -1) return "";

    // 「＞」の位置より右側の文字列を取得してトリムする
    const resultText = text.slice(arrowIndex + 1).trim();

    // 取得した文字列を返す
    return resultText;
}