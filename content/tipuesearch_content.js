var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Solvespace', 'text': '', 'tags': '', 'url': 'Solvespace.html'}, {'title': '編譯', 'text': 'Solvespace 編譯 \n 分組作業: \n 請各組組員分別完成 Solvespace 編譯流程後, 建立一個帶有字幕說明的導引影片, 上傳至 Youtube 並內嵌至各分組網站中. \n 下載可攜程式系統: \n 2019Fall可攜套件.7z \n 參考資料: \n https://2019wcm.blogspot.com/2019/03/msys2-solvespace.html \n https://github.com/solvespace/solvespace \n 編譯步驟: \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe (透過 MSYS2 執行 shell 指令, 而非 portablegit 中的 sh.exe) \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone \xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n 上述指令同: \n git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n cd solvespace \n git submodule init \n git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄): \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n (mingw32-make -Wl,-static) \n rename libpng.dll.a to libpng_static.a and copy to Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 編譯完成後, 可以在 build\\bin 目錄中建立 solvespace.exe, 配合相關 dll 檔案後, 即可執行 \n \n \n \n \n', 'tags': '', 'url': '編譯.html'}, {'title': '繪圖示範', 'text': 'solvespace操作 \n Solvespace Tutorial 6: Christmas Tree (BONUS) \n \n', 'tags': '', 'url': '繪圖示範.html'}, {'title': 'V-Rep', 'text': '', 'tags': '', 'url': 'V-Rep.html'}, {'title': '雙輪車控制模擬', 'text': 'Python remote API 雙輪車控制模擬 \n 目前為近端操控，未來的目標是希望在遠端裝置上執行 \n \n', 'tags': '', 'url': '雙輪車控制模擬.html'}, {'title': '其他', 'text': '', 'tags': '', 'url': '其他.html'}, {'title': 'Aesgisub', 'text': 'video----->New vidio\xa0 匯入新片 \n 指令: \n ctel+3 : 在影片該處設為字幕出現片段頭部 \n \n ctel+4 : 在影片該處設為字幕出現片段尾部 \n \n 匯出時依照下面指令轉成srt檔(export) \n \n \n Y: \n cd tmp \n ffmpeg -i input.mp4 -vf subtitles=input.srt output.mp4 \n 該指令為把原檔(\xa0input.mp4)加入字幕(input.srt) ，輸出成output的檔案名 \n \n 記得把影片檔和字幕檔都放在Y的tmp下 \n \n \n', 'tags': '', 'url': 'Aesgisub.html'}, {'title': '啟用 CMSiMDE 中的網誌系統', 'text': '\n \n', 'tags': '', 'url': '啟用 CMSiMDE 中的網誌系統.html'}, {'title': 'soliworks', 'text': 'oliworks\xa0 brief\xa0 history \n \xa0 \xa0 \xa0 \xa0 Soliworks是由Jon Hirschtick於1993年12月創立的，Jon Hirschtick用100萬美元成立了該公司。 之後Hirschtick招募了一組工程師，他們的目標是創建3D CAD軟件，並且希望這個軟體能夠讓Windows系統的介面成功運作並適合Windows去利用。 \n \xa0 \xa0 \xa0 \xa0 1995年11月，SolidWorks很快發布了。它是Windows的第一個而且也很重要的建模器。事實證明這是CAD後續發展的重要一步，雖然AutoCAD發行得比Soliworks早得多，但SolidWorks為也帶來了新的東西-「3D建模」。因此，3D CAD成為1990年代的焦點。在短短幾個月內，SolidWorks改變了工程師將「創造變為現實」的方式。 \n \xa0 \xa0 \xa0 \xa0 SolidWorks實在令人印象深刻，以至於1997年，它被達索系統公司（DassaultSystèmes）以3.2億美元的驚人股票收購，Jon Hirschtick在接下來的14年留任，在他的領導下，SolidWorks也成功的成長為收入達1億美元的公司。 赫希提克後來離開，創立了另一家我們熟悉的公司Onshape。 \n \xa0 \xa0 \xa0 \xa0\xa0\xa0當SolidWorks於1995年首次發佈時，它確實改變了遊戲規則，有了它，首選平台就從UNIX轉移到了PC， 軟件的成本也從18,000美元變到4,000美元，所需的培訓被大量壓縮為幾天。不用說，SolidWorks徹底改變了每個工程師的桌面。自成立以來，SolidWorks已有了26個版本，每個版本都提供更多功能和增強功能。 \n 國立虎尾科技大學 - 四設二甲 - 電腦輔助設計實習 - 40723110 - Soliworks practice \n \n', 'tags': '', 'url': 'soliworks.html'}, {'title': 'NX12', 'text': 'source :\xa0 NX-12-for-Engineering-Design.pdf  \n CHAPTER 1 – INTRODUCTION \n 在全球競爭日益激烈的背景下，現代製造環境的特徵在於交付品種日益增多，並趨向於小批量和高質量的產品。 除非以高質量、低成本和在更短時間推出新產品，否則在全球競爭中生存是一件很難的事。隨著計算能力的巨大變化和用於設計和生產的軟件工具的廣泛可用性，工程師現在正在使用計算機輔助設計（CAD），計算機輔助製造（CAM）和計算機輔助工程（CAE）系統來自動化其設計和生產過程。 現在，這些技術每天都用於各種不同的工程任務。 以下是產品實現過程中如何使用CAD，CAM和CAE技術的簡要說明。 \n 1.1 PRODUCT REALIZATION PROCESS\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0產品實現過程可以大致分為兩個階段：設計和製造。 設計過程從識別新客戶需求和待改進的設計變量開始，這些營銷變量在獲得客戶反饋後由市場營銷人員進行識別。 一旦收集了相關的設計信息，就制定了設計規範。 根據相關設計信息進行可行性研究，並進行詳細設計和分析。 詳細設計包括設計概念化，預期產品圖紙，草圖和幾何建模。 分析包括應力分析，干涉檢查，運動學分析，質量特性計算和公差分析以及設計優化。 從這些活動中獲得的結果的質量與分析的質量以及進行分析的工具直接相關。 \n 製造過程始於從生產計劃開始的車間活動，該活動使用設計過程圖並以實際產品結束。 流程計劃包括生產計劃，材料採購和機器選擇等活動。 在生產過程的各個階段，需要完成各種任務，例如購買新工具，NC編程和質量檢查。 流程計劃包括對產品製造中使用的所有流程的計劃。 通過質量控制檢查的零件將經過功能測試，包裝，標記和運送給客戶。 \n \n Product Realization Process (Mastering CAD/CAM, by Ibrahim Zeid, McGraw Hill, 2005). \n \n 1.2 BRIEF HISTORY OF CAD/CAM DEVELOPMENT \xa0 \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0當前的CAD / CAM技術的起源可以追溯到文明古代，當時古埃及的工程師意識到了圖形通信的存在。現今的正交投影技術是在1800年代左右發明的。，CAD / CAM系統的真正開發始於1950年代。 CAD / CAM在上個世紀經歷了四個主要的發展階段。 1950年代被稱為交互式計算機圖形時代，而當時計算機的缺點使這個時代的發展放慢了腳步。在1950年代後期，開始了自動編程工具（APT）的開發。 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa01960年代是交互式計算機圖形學最關鍵的研究時期。伊万·薩瑟蘭（Ivan Sutherland）開發了一個畫板系統，該系統演示了在陰極射線管（CRT）上交互式創建圖形和對象替換的可能性。 CAD一詞開始出現，“設計”一詞超越了基本的製圖概念。 \n \xa0 \xa0 \xa0 \xa0 \xa0 在1970年代，過去十年中計算機圖形學的研究工作開始富有成果，工業，政府和學術界都意識到了交互式計算機圖形學在提高生產率方面的潛力。 1970年代被譽為計算機製圖的黃金時代和專用儀器設計應用程序的開始。國家計算機圖形協會 成立 （NCGA），並啟動了初始圖形交換規範（IGES）。 \n \xa0 \xa0 \xa0 \xa0 \xa0 在1980年代，新的理論和算法得到了發展，並且設計和製造的各種要素都得到了發展。主要的研究和開發重點是將CAD / CAM系統擴展到三維幾何設計之外，並提供更多的工程應用。 \n \xa0 \xa0 \xa0 \xa0 \xa0 目前，CAD / CAM的開發側重於設計和製造中各種元素的高效、快速集成和自動化，以及新算法的開發。 有許多可用於直接使用的商業CAD / CAM軟件包，它們非常易於使用並且對外的態度非常友好。 \n 以下是當前市場中的一些商業軟件包。 \n ■\xa0 Solid Edge，AutoCAD，Inventor和TurboCAD是一些負擔得起的CAD軟件系統。 \n ■\xa0 NX，Pro-E，CATIA和SolidWorks是高端建模和設計軟件系統，它們成本更高但功能更強大。 這些軟件系統還具有計算機輔助的製造和工程分析功能。 ■\xa0 Onshape和Fusion 360是基於雲的CAD軟件，可通過用戶的瀏覽器提供CAD功能。 \n ■\xa0 ANSYS，ABAQUS，NASTRAN和COMSOL是主要用於CAE的軟件包。 \n \n 1.3 DEFINITION OF CAD/CAM/CAE\xa0 \n \xa0 \n 1.3.1 Computer Aided Design – CAD\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 CAD是與使用計算機系統來協助設計的「創建，修改，分析和優化有關的技術」。 任何體現計算機圖形的計算機程序和在設計過程中有助於工程功能的應用程序都可以歸類為CAD軟件。 \n \xa0 \xa0 \xa0 \xa0 \xa0 CAD的最基本作用是定義設計的幾何形狀-機械零件，產品組裝，建築結構，電子電路，建築物佈局等。CAD系統的最大好處是可以節省大量時間和精力， 減少因每次需要重新定義設計的幾何形狀而導致的錯誤。 \n Computer Aided Manufacturing – CAM \n CAM技術涉及計算機系統，該系統通過與工廠生產資源的計算機接口來計劃、管理和控制製造操作。 CAM最重要的領域之一是數控「（NC）」。 這是一種使用編程指令來控制機床的技術，該機床將切削，銑削，磨削，沖壓或將原料製成成品。 CAM的另一個重要功能是在機器人編程中。 流程計劃也是計算機自動化的目標。 \n Computer Aided Engineering – CAE \n CAE技術使用計算機系統來分析CAD創建的產品的功能，從而使設計人員可以模擬和研究產品的性能，從而可以優化和優化設計。 \n CAE工具可用於許多不同類型的分析。 例如，運動學分析程序可用於確定機構中的運動路徑和連桿速度。 動態分析程序可用於確定複雜組件（例如汽車）中的載荷和位移。 最受歡迎的分析方法之一是使用有限元方法（FEM）。 該方法可用於確定應力，變形，傳熱，磁場分佈，流體流動和其他連續場問題，而這些問題通常很難用任何其他方法解決。 \n \n 1.4. SCOPE OF THIS TUTORIAL\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 本教程是為有興趣學習如何使用NX 12設計機械零部件的學生和工程師編寫的。 學習使用NX 12對於學習如何使用其他CAD系統（例如PRO-E和CATIA）也將非常有價值。 本教程提供了學習NX 12的系統方法。 \n \xa0 \xa0 \xa0 \xa0 \xa0 第2章介紹了NX 12的基本知識，從開始會議到通過練習基本功能（如打印，保存和退出）來熟悉NX 12佈局。它還簡要介紹了坐標系，圖層，各種工具箱和其他重要命令，這些將在後面的章節中使用。 \xa0 \xa0 \xa0 \xa0 \xa0 第3章介紹了素描的概念。它描述瞭如何創建草圖以及給出幾何和尺寸約束。本章非常重要，因為當今的組件的幾何形狀非常複雜，並且僅憑基本特徵很難建模。 零件的實際設計和建模始於第4章。它描述了不同的特徵，例如參考特徵，後掠特徵和原始特徵，以及這些特徵如何用於創建設計。對特徵執行各種特徵操作。 \xa0 \xa0 \xa0 \xa0 \xa0 您將在第5章中學習如何從零件模型創建圖形。在本章中，我們將演示如何通過添加視圖，標註零件圖形的尺寸以及修改圖形中的各種屬性（例如文本大小，箭頭大小）來創建圖形。和寬容。 \xa0 \xa0 \xa0 \xa0 \xa0 第6章介紹了裝配建模的概念及其術語。它描述了TopDown建模和Bottom-Up建模。我們將使用自下而上的建模方法將組件組裝到產品中。 \xa0 \xa0 \xa0 \xa0 \xa0 第7章介紹了自由格式建模。將演示建模曲線和平滑表面的方法。 \xa0 \xa0 \xa0 \xa0 \xa0 第8章簡要介紹了NX 12中用於有限元分析的設計仿真 \n \xa0 \xa0 \xa0 \xa0 \xa0 第9章是將設計的模型實施到加工環境中進行加工的實時經驗。 本章介紹刀具路徑的生成，驗證和仿真，以創建CNC（計算機數字代碼），以從多軸甚至先進的CNC機床生產設計零件。 \n \xa0 \xa0 \xa0 \xa0 \xa0 每章中使用的示例和練習題經過精心設計，最終將在本章中進行匯總。 由於這一獨特功能，您應該保存在每一章中創建的所有模型。 \n', 'tags': '', 'url': 'NX12.html'}]};