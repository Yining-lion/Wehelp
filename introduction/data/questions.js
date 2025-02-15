export const questions = [
    {
        id: 1,
        question: '一、個人簡介和申請動機',
        answer: `我是王禕寧，24歲，畢業於輔仁大學營養科學系。
        我具備自主學習的精神，對於感興趣的領域會積極鑽研，
        以排球為例，我會利用網路資源研究如何增進球技，且每週打球1-3次，
        如此持續一年後球技有顯著的進步，朋友們也都說我進步很多；
        此外，由於喜歡剪輯影片，我自學了Premiere和InShot等剪輯軟體，
        以下為我用Inshot剪輯出的打球影片。(前面片段我穿3號球衣，後面片段我穿淺藍球衣)
        <a href="https://youtu.be/1BnPbkSww-4" target="_blank">(打球影片)</a>。
        <br><br>
        我在大三升大四的暑假於醫院實習，這段經驗讓我意識到營養師的工作並非我心之所向。
        畢業後有時會去母親管理的宿舍幫忙，我覺得如果宿舍有網站可以吸引租客，
        又或是有一些管理系統方便管理的話，母親的工作負擔應該可以輕省許多，
        所以我萌生了想轉職軟體工程師的想法。起初我先線上自學了約10個月的時間，
        也做出了一個簡易的電商網頁，雖然因此確定我喜歡寫程式以及喜歡解決問題，
        但也因為是按照課程步驟所做出的作品，所以還是會懷疑自己是否能成為一名獨立的前端工程師，
        也不敢拿著這個作品去面試。因此我期待能接受WeHelp的魔鬼訓練，
        期盼藉由老師的引導培養自己獨立完成專案的能力，使自己能經歷淬鍊之後成為閃閃發光的鑽石！
`.replace(/(?<!<a )\s+(?!href=)/g, ''), /* 正則表達式會忽略 <a href=""> 中的空格並移除其他地方的空格。 / /表示正則表達式的邊界 */
        deg1: -90,
        deg2: 90,
    },
    {
        id: 2,
        question: '二、曾經做過哪些軟體工程技術相關的學習？',
        answer: `我曾藉由Hahow平台學習基本的HTML、CSS，也學習使用Pug模板語言使html架構更為簡潔好看，
        以及學習CSS預處理器-Sass，使CSS程式碼更易於維護。
        接著，我藉由GrandmaCan學習Javascript，並模擬出一個電商網頁的介面
        <a href="https://yining-lion.github.io/demo/website/home.html" target="_blank">(電商網頁)</a>，
        其中使用Bootstrap 5框架排版及做出RWD效果，此網頁有以下功能：<br>
        1. 首頁設計<br>
        2. 商品瀏覽與分類<br>
        3. 商品詳細頁面<br>
        4. 購物車功能(加入購物車、刪除商品、更改數量)<br>
        5. 關鍵字搜尋功能<br>
        6. localStorage儲存資料`.replace(/(?<!<a )\s+(?!href=)/g, ''),
        deg1: -45,
        deg2: 45,
    },
    {
        id: 3,
        question: '三、如果參與這個訓練，會怎麼安排學習時間？',
        answer: `我平日早上有一份兼職工作約4小時，下午回家後便可以開始學習約8-9小時，
        兩天假日會有半天的時間進行娛樂活動以放鬆心情，故每週約有60-66小時可以學習。`.replace(/\s+/g, ''),
        deg1: 0,
        deg2: 0,
    },
    {
        id: 4,
        question: '四、軟體技術日新月異，如何確定選擇投入的領域是正確有回報的？',
        answer: `在軟體技術快速變化的環境中，我認為市場上只要對某個領域還有需求便是正確有回報的。
        雖然現在流行的程式語言或許在未來會被淘汰，但學習現在流行的技術及理解程式語言的基本邏輯，
        我認為是進入這個領域的良好起點。因為只要建立好扎實的基礎，未來即使有新的技術誕生，
        只要持續學習並調整自己的思考方式，就能在未來的技術浪潮中找到新的機會。`.replace(/\s+/g, ''),
        deg1: 45,
        deg2: -45,
    },
    {
        id: 5,
        question: '五、請描述一件產生明顯負面情緒的經歷，如何處理該情緒？',
        answer: `大三升大四的暑假，在醫院實習這兩個半月的時間是我人生中最辛苦的時候，
        每天緊湊高壓的行程幾乎壓得我喘不過氣，我處理情緒的方式除了喝手搖飲紓壓以外，
        也會跟家人訴苦並且哭一場就沒事了，畢竟該做的事情還是要去做，
        因為我認為不行動的話反而會比去行動承受更多的辛苦，所以眼淚擦乾後再繼續前行就好了。`.replace(/\s+/g, ''),
        deg1: 90,
        deg2: -90,
    },
    {
        id: 6,
        question: '六、關於這份申請網頁，分享一個開發時的技術心得',
        answer: `我的設計理念是希望使用者在不使用滾輪的情況下，可以直接在同個視窗上看到所有問題及答案，
        以增加使用者觀看的便利性，於是想到了點擊按鈕後會跳出小視窗的方法，只要將問題變成按鈕並點擊，
        答案便會透過小視窗方式跳出。經網路搜尋後發現bootstrap有modal(互動視窗)方法可以達成此效果，
        於是便藉此機會學習如何使用，並與JS動態生成html內容做搭配。
        <br><br>
        不過在做這個專案的過程中遇到了一個問題，就是我在使用modal之後無法順利hover大頭照產生翻轉效果，
        於是我詢問Chatgpt「我有使用bootstrap modal，為何我鼠標移動到某物件上卻無法順利產生hover效果？」
        才知道原來是因為modal有內建backdrop遮罩的原因，只要在大頭照的z-index設為1，
        使其堆疊順序高於backdrop便可以解決此問題了。雖然Chatgpt不是萬能，但如果善用是可以加速我學習的效率的。`.replace(/(?<!b )\s+(?!m)/g, ''),
        deg1: 135,
        deg2: -135,
    },
    {
        id: 7,
        question: '七、如何看待自身工作和整個社會群體的連結關係？',
        answer: `過去曾在輔大台灣偏鄉教育關懷中心擔任專案助理，主要工作為審查學生申請獎學金資料、
        執行偏鄉遠端視訊教學、舉辦兩天一夜的學習活動等，是一份可以幫助偏鄉或窮困學生的工作，
        也使自己可以為台灣社會縮短城鄉落差盡一份心力，我認為是一份極具意義的工作。
        <br><br>
        軟體工程師這個職業的話，開發的技術和產品會直接影響人們的生活和工作方式，
        可以說是促進社會進步的重要角色之一，舉例並縮小來看的話，如果我成功開發宿舍相關的系統，
        就能更有效率的管理宿舍，那麼再放大來看的話，我認為一名軟體工程師確實是可以有效增進社會運作的效率的。`.replace(/\s+/g, ''),
        deg1: 180,
        deg2: -180,
    },
    {
        id: 8,
        question: '八、其他想要對我們說的事情？',
        answer: `我看了之前畢業學員的個人專案成果報告，
        他們將自己過去的工作經驗或興趣與專案做結合很專業也很厲害！
        因為有這些厲害的學長姐們，讓我覺得WeHelp是真正能培養出一個獨立工程師的，
        真的很希望自己可以成為WeHelp的學員好好磨練自己，讓自己能成為一名真正的軟體工程師！！`.replace(/\s+/g, ''),
        deg1: 225,
        deg2: -225,
    },
]